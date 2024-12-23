import { Plus } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function NotesSection() {
  const notes = [
    {
      user: {
        name: "Mollie Hall",
        image: "/placeholder.svg?height=32&width=32"
      },
      time: "Today 2:20pm",
      note: "This candidate is suitable."
    },
    {
      user: {
        name: "Mollie Hall",
        image: "/placeholder.svg?height=32&width=32"
      },
      time: "Today 2:20pm",
      note: "Candidate has vast experience."
    }
  ]

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Note</h2>
        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Note
        </Button>
      </div>
      <div className="mt-4 space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={note.user.image}
                  alt={note.user.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{note.user.name}</span>
              </div>
              <div className="text-sm text-muted-foreground">{note.time}</div>
            </div>
            <div className="mt-2 text-sm">{note.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

