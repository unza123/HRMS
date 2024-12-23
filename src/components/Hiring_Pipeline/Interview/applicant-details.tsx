import { Edit2 } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function ApplicantDetails() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Details</h2>
        <Button variant="secondary">Move Next Status</Button>
      </div>
      <div className="mt-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground">Stage</div>
            <div className="font-medium">Interview</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">Recruiter</div>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Recruiter"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm">Vivi jane</span>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Edit2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

