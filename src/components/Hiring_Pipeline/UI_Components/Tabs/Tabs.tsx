import React from 'react';
import TabItem from './TabItem';

interface TabUIProps {
  steps: string[];
  currentStep: number;
}

export default function TabUI({ steps, currentStep }: TabUIProps) {
  return (
    <div className="flex w-full">
      {steps.map((step, index) => (
        <TabItem
          key={step}
          label={step}
          isActive={index === currentStep}
          isCompleted={index < currentStep}
          isFirst={index === 0}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}