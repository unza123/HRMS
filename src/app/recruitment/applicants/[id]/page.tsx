'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProgressSteps } from '@/components/ui/progress-steps';
import { Checkbox } from '@/components/ui/checkbox';
import TabUI from '@/components/Hiring_Pipeline/UI_Components/Tabs/Tabs';
import { useState } from 'react';

export default function ApplicantDetailsPage({ params }: { params: { id: string } }) {
  // Mock data for the applicant
  const applicant = {
    id: '20543',
    firstName: 'Candice',
    lastName: 'Wu',
    email: 'hi@candicewu.com',
    phone: '0456/7887576',
    address: '27 Ijazi apartment karachi',
    appliedDate: '19 Jan 2022',
    gender: 'Female',
    birthDate: '23 March,1994',
    currentJob: 'UX Designer',
    qualification: 'Bachelors in Computer Science',
    totalExperience: '5 years',
    website: 'www.hocandicewuhere.com',
    currentSalary: '100k',
    expectedSalary: '145k',
    skills: ['Design Thinking', 'Sketching', 'User Research'],
    appliedJob: {
      title: 'Product Designer',
      type: 'Full Time'
    },
    status: 'Screening',
    rating: 4,
    match: 70,
    experience: [
      {
        role: 'Lead Product Designer',
        company: 'Layers',
        period: 'May 2020 - Present',
        icon: '💜'
      },
      {
        role: 'Product Designer',
        company: 'Sisyphus',
        period: 'Jun 2018 - May 2020',
        icon: '⚡'
      },
      {
        role: 'UX Designer',
        company: 'Catalog',
        period: 'Mar 2017 - Jun 2018',
        icon: '🔵'
      },
      {
        role: 'Visual Designer',
        company: 'Quotient',
        period: 'Apr 2015 - Mar 2017',
        icon: '🟣'
      }
    ]
  };
  const steps = ['Screening', 'Interview', 'Assessment', 'Offered', 'Hired'];

     const [currentStep, setCurrentStep] = useState(2); // Assessment is active (index 2)
  
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/recruitment" className="text-gray-500">Recruitment</Link>
          <span className="text-gray-500">›</span>
          <Link href="/recruitment/applicants" className="text-gray-500">Applicants</Link>
          <span className="text-gray-500">›</span>
          <span className="text-purple-600">Applicant</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="details" className="mb-6">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="hiring">Hiring Pipeline</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-6">
          <div className="grid grid-cols-[300px_1fr] gap-6">
            {/* Left Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarFallback>{applicant.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-semibold">{`${applicant.firstName} ${applicant.lastName}`}</h2>
                  <p className="text-gray-500 text-sm mb-4">Applied {applicant.appliedDate}</p>
                </div>

                {/* Applied Job */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">Applied Jobs</h3>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium">{applicant.appliedJob.title}</p>
                    <p className="text-sm text-gray-500">{applicant.appliedJob.type}</p>
                  </div>
                </div>

                {/* Status */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">Status</h3>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {applicant.status}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Rating</h3>
                    <button className="text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < applicant.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Match */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">Match</h3>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          {applicant.match}%
                        </span>
                      </div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden rounded bg-purple-100">
                      <div
                        style={{ width: `${applicant.match}%` }}
                        className="bg-purple-600"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-4">Contact Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{applicant.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{applicant.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{applicant.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Basic Information</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">First Name</p>
                    <p className="font-medium">{applicant.firstName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Last Name</p>
                    <p className="font-medium">{applicant.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Candidate ID</p>
                    <p className="font-medium">{applicant.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Gender</p>
                    <p className="font-medium">{applicant.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Birth Date</p>
                    <p className="font-medium">{applicant.birthDate}</p>
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Professional Details</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Current Job Title</p>
                    <p className="font-medium">{applicant.currentJob}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Highest Qualification Held</p>
                    <p className="font-medium">{applicant.qualification}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Experience</p>
                    <p className="font-medium">{applicant.totalExperience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Website/Portfolio</p>
                    <p className="font-medium text-purple-600">{applicant.website}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Current Salary</p>
                    <p className="font-medium">{applicant.currentSalary}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Expected Salary</p>
                    <p className="font-medium">{applicant.expectedSalary}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Skill set</p>
                  <div className="flex gap-2">
                    {applicant.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-6">Experience</h3>
                <div className="space-y-6">
                  {applicant.experience.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-xl">
                        {exp.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{exp.role}</h4>
                        <p className="text-sm text-gray-500">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resume">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">Resume content will go here</p>
          </div>
        </TabsContent>

        <TabsContent value="hiring">
        {/*   <div className="space-y-6"> */}
          <div className="grid grid-cols-[300px_1fr] gap-6">
          
             {/* Left Sidebar */}
             <div className="space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarFallback>{applicant.firstName[0]}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-semibold">{`${applicant.firstName} ${applicant.lastName}`}</h2>
                  <p className="text-gray-500 text-sm mb-4">Applied {applicant.appliedDate}</p>
                </div>

                {/* Applied Job */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">Applied Jobs</h3>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium">{applicant.appliedJob.title}</p>
                    <p className="text-sm text-gray-500">{applicant.appliedJob.type}</p>
                  </div>
                </div>

                {/* Status */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">Status</h3>
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {applicant.status}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Rating</h3>
                    <button className="text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < applicant.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Match */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-2">Match</h3>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          {applicant.match}%
                        </span>
                      </div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden rounded bg-purple-100">
                      <div
                        style={{ width: `${applicant.match}%` }}
                        className="bg-purple-600"
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="border-t pt-4 mt-4">
                  <h3 className="font-medium mb-4">Contact Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{applicant.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{applicant.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{applicant.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pipeline Progress */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-medium">Hiring Pipeline</h2>
                <div className="flex gap-2">
                  <Button variant="outline" className="text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add to Talent Pool
                  </Button>
                  <Button variant="outline" className="text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add to Grey list
                  </Button>
                </div>
              </div>
              <TabUI steps={steps} currentStep={currentStep} />
              {/* <ProgressSteps
                steps={['Screening', 'Interview', 'Assessment', 'Offered', 'Hired']}
                currentStep={1}
              /> */}
            </div>

            {/* Details Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Details</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Stage</p>
                  <p className="font-medium">Interview</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Recruiter</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>VJ</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">Vivi jane</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Move Next Status
                </Button>
              </div>
            </div>

            {/* Interview Schedule Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Interview Schedule</h3>
                <Button variant="outline" className="text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Interview
                </Button>
              </div>

              <div className="space-y-6">
                {/* Technical Round */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded"></div>
                  <div className="pl-6">
                    <p className="text-sm text-gray-500">13 Mar,2022</p>
                    <div className="mt-2 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Technical Round</h4>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Timing</p>
                          <p className="font-medium">3 pm</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Event Type</p>
                          <p className="font-medium">Zoom Interview</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Interview by</p>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback>SJ</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">siri jae</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cultural fit Round */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 rounded"></div>
                  <div className="pl-6">
                    <p className="text-sm text-gray-500">13 Mar,2022</p>
                    <div className="mt-2 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Cultural fit Round</h4>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Timing</p>
                          <p className="font-medium">3 pm</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Event Type</p>
                          <p className="font-medium">Onsite Interview</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Interview by</p>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback>RJ</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">ruby jane</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feed Back Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Feed Back</h3>
                <Button variant="outline" className="text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Feedback
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">siri jae</p>
                      <p className="text-sm text-gray-500">Today 2:20pm</p>
                    </div>
                    <p className="text-gray-600">This candidate is suitable.Call her for next interview</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Check List */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-4">Check List</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Checkbox id="skills" />
                  <label htmlFor="skills" className="text-sm">Skills</label>
                  <Checkbox id="experience" className="ml-auto" checked />
                  <label htmlFor="experience" className="text-sm">Experience</label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="attitude" />
                  <label htmlFor="attitude" className="text-sm">Attitude</label>
                  <Checkbox id="education" className="ml-auto" checked />
                  <label htmlFor="education" className="text-sm">Education</label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="confidence" checked />
                  <label htmlFor="confidence" className="text-sm">Confidence</label>
                  <Checkbox id="other" className="ml-auto" />
                  <label htmlFor="other" className="text-sm">Other</label>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Note</h3>
                <Button variant="outline" className="text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Note
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>MH</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">Mollie Hall</p>
                      <p className="text-sm text-gray-500">Today 2:20pm</p>
                    </div>
                    <p className="text-gray-600">This candidate is suitable.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>AK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">Allynn kalt</p>
                      <p className="text-sm text-gray-500">Today 2:20pm</p>
                    </div>
                    <p className="text-gray-600">Candidate has vast experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Back Button */}
      <div className="mt-6">
        <Link
          href="/recruitment/applicants"
          className="text-gray-500 flex items-center gap-2 hover:text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          back
        </Link>
      </div>
    </div>
  );
}
