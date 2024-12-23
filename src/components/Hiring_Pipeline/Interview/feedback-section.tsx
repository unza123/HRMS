import { Plus } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function FeedbackSection() {
  const feedback = [
    {
      user: {
        name: "siri jae",
        image: "/placeholder.svg?height=32&width=32"
      },
      time: "Today 2:20pm",
      comment: "This candidate is suitable.Call her for next interview"
    }
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Feed Back</h2>
        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Feedback
        </Button>
      </div>
      <div className="mt-4 space-y-4">
        {feedback.map((item, index) => (
          <div key={index} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={item.user.image}
                  alt={item.user.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span>{item.user.name}</span>
              </div>
              <div className="text-sm text-muted-foreground">{item.time}</div>
            </div>
            <div className="mt-2 text-sm">{item.comment}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

