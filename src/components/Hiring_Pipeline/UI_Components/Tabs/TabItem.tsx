import React from 'react';
import '../../../../styles/tabs.css';
interface TabItemProps {
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export default function TabItem({ 
  label, 
  isActive, 
  isCompleted,
  isFirst,
  isLast 
}: TabItemProps) {
  const baseClasses = "relative flex items-center justify-center h-10 px-6 text-sm font-medium transition-colors";
  
  const getTabClasses = () => {
    if (isActive) {
      return `${baseClasses} bg-purple-600 text-white clip-path-hexagon `;
    }
    if (isCompleted) {
      return `${baseClasses} bg-purple-100 text-purple-600 clip-path-hexagon`;
    }
    return `${baseClasses} bg-gray-100 text-gray-500 clip-path-hexagon`;
  };
/* Custom clip path for the active hexagonal tab */
/* .clip-path-hexagon {
    clip-path: polygon(15px 0%, calc(100% - 15px) 0%, 100% 50%, calc(100% - 15px) 100%, 15px 100%, 0% 50%);
  } */
  return (
    <div className="flex-1 relative">
      <div className={getTabClasses()}>
        {!isFirst && !isActive && (
          <div 
            className={`absolute left-0 top-0 border-l-[24px] border-l-transparent border-t-[40px] ${
              isCompleted ? 'border-t-purple-100' : 'border-t-gray-100'
            }`} 
          />
        )}
        {!isLast && !isActive && (
          <div 
            className={`absolute right-0 top-0 border-r-[24px] border-r-transparent border-t-[40px] ${
              isCompleted ? 'border-t-purple-100' : 'border-t-gray-100'
            }`}
          />
        )}
        {label}
      </div>
    </div>
  );
}