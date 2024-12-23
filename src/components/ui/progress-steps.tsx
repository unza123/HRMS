'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="flex w-full justify-between">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isPast = index < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step} className="flex items-center">
            <div className="relative flex flex-col items-center">
              {/* Step Label */}
              <span
                className={`mb-2 text-sm ${
                  isActive
                    ? 'text-purple-600 font-medium'
                    : isPast
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              >
                {step}
              </span>
              
              {/* Step Circle */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : isPast
                    ? 'bg-purple-100'
                    : 'bg-gray-100'
                }`}
              >
                {isPast && (
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Connector Line */}
              {!isLast && (
                <div
                  className={`absolute left-8 top-[30px] w-[calc(100%+4rem)] h-1 ${
                    isPast ? 'bg-purple-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
