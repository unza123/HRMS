import Image from "next/image"
import { ChevronLeft, Edit2, Plus, Star } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplicantDetails } from "./applicant-details"
import { InterviewSchedule } from "./interview-schedule"
import { FeedbackSection } from "./feedback-section"
import { NotesSection } from "./notes-section"

export default function ApplicantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white px-4 py-3">
        <Link href="/applicants" className="inline-flex items-center text-sm text-muted-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          back
        </Link>
      </div>
      
      <div className="flex flex-col gap-6 p-4 lg:flex-row">
        {/* Left Sidebar */}
        <div className="w-full lg:w-72">
          <div className="rounded-lg border bg-white p-4">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-24 w-24">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Applicant photo"
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                />
              </div>
              <h1 className="mt-4 text-xl font-semibold">Candice Wu</h1>
              <p className="text-sm text-muted-foreground">Applied 18-1-2022</p>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold">Applied Jobs</h2>
              <div className="mt-2 rounded-md border p-3">
                <div className="font-medium">Product Designer</div>
                <div className="text-sm text-muted-foreground">Full Time</div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold">Status</h2>
              <div className="mt-2 rounded-md border p-3">
                <div className="text-sm font-medium text-purple-600">screening</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold">Rating</h2>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= 3 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold">Match</h2>
              <Progress value={70} className="mt-2" />
              <div className="mt-1 text-right text-sm">70%</div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-semibold">Contact Details</h2>
              <div className="mt-2 space-y-3">
                <div className="text-sm">
                  <div className="text-muted-foreground">Email</div>
                  <div>hi@candicewu.com</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Phone</div>
                  <div>0456789657578</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Address</div>
                  <div>22 niazi apartment,karachi</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="rounded-lg border bg-white p-6">
            <Tabs defaultValue="hiring-pipeline" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="resume">Resume</TabsTrigger>
                <TabsTrigger value="hiring-pipeline">Hiring Pipeline</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="mb-8">
              <h2 className="text-lg font-semibold">Hiring Pipeline</h2>
              <div className="mt-4 flex items-center gap-2">
                {["Screening", "Interview", "Assessment", "Offered", "Hired"].map((stage, index) => (
                  <div
                    key={stage}
                    className={`flex-1 rounded-md p-3 text-center text-sm ${
                      stage === "Interview"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {stage}
                  </div>
                ))}
              </div>
            </div>

            <ApplicantDetails />
            <InterviewSchedule />
            <FeedbackSection />
            <NotesSection />
          </div>
        </div>
      </div>
    </div>
  )
}

