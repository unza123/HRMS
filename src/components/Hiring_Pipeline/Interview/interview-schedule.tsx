import { Edit2, Plus } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function InterviewSchedule() {
  const interviews = [
    {
      date: "13 Mar,2022",
      round: "Technical Round",
      timing: "3 pm",
      type: "Zoom Interview",
      interviewer: {
        name: "siri jae",
        image: "/placeholder.svg?height=32&width=32"
      }
    },
    {
      date: "13 Mar,2022",
      round: "Cultural fit Round",
      timing: "3 pm",
      type: "Onsite Interview",
      interviewer: {
        name: "ruby jane",
        image: "/placeholder.svg?height=32&width=32"
      }
    }
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Interview Schedule</h2>
        <Button variant="outline" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add Interview
        </Button>
      </div>
      <div className="mt-4 space-y-4">
        {interviews.map((interview, index) => (
          <div key={index} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-sm">{interview.date}</div>
                <div className="font-medium">{interview.round}</div>
              </div>
              <Button variant="ghost" size="icon">
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div>
                <div className="text-muted-foreground">Timing</div>
                <div>{interview.timing}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Event Type</div>
                <div>{interview.type}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Interview by</div>
                <div className="flex items-center gap-2">
                  <Image
                    src={interview.interviewer.image}
                    alt={interview.interviewer.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>{interview.interviewer.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

