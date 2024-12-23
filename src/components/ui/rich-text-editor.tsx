'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { cn } from '@/lib/utils';

interface RichTextEditorProps {
  placeholder?: string;
  className?: string;
  onChange?: (html: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 border-b p-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={cn(
          "p-1 hover:bg-gray-100 rounded",
          editor.isActive('bold') && 'bg-gray-100'
        )}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={cn(
          "p-1 hover:bg-gray-100 rounded",
          editor.isActive('italic') && 'bg-gray-100'
        )}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={cn(
          "p-1 hover:bg-gray-100 rounded",
          editor.isActive('underline') && 'bg-gray-100'
        )}
      >
        U
      </button>
      <span className="w-px h-4 bg-gray-300 mx-2"></span>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(
          "p-1 hover:bg-gray-100 rounded",
          editor.isActive('bulletList') && 'bg-gray-100'
        )}
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
    </div>
  );
};

export function RichTextEditor({
  placeholder = 'Write something...',
  className,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    editorProps: {
      attributes: {
        class: cn(
          'prose prose-sm max-w-none focus:outline-none',
          'min-h-[200px] p-4',
          className
        ),
      },
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-md">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
