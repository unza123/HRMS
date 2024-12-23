'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Skill {
  name: string;
  color: string;
}

const skills: Skill[] = [
  { name: 'Javascript', color: 'bg-purple-100 text-purple-600' },
  { name: 'React.js', color: 'bg-green-100 text-green-600' },
  { name: 'React.js', color: 'bg-blue-100 text-blue-600' },
  { name: 'React.js', color: 'bg-red-100 text-red-600' },
  { name: 'React.js', color: 'bg-blue-100 text-blue-600' },
  { name: 'React.js', color: 'bg-blue-100 text-blue-600' },
  { name: 'React.js', color: 'bg-red-100 text-red-600' },
];

const jobDetails = {
  title: 'Front End Developer',
  description: 'lorem ipsumLorem ipsum dolor sit amet. Et accusantium minima et otocaecati impedit non earum quod ex itaque rerum hic asperiores laborum. Rem tenetur commodi id officia enim et perferendis quibusdam.',
  requirements: [
    'lorem ipsumLorem ipsum dolor sit amet. Et accusantium minima etobcaecamper',
    'tenetur commodi id officia enim et perferendis quibusdam',
    'Non odit cupidait stigalisum debitis et dignissimos inventore ut galisum',
    'voluptatum At aliquoton odit culpa sit galisum sert'
  ],
  benefits: [
    'lorem ipsumLorem ipsum dolor sit amet. Et accusantium minima etobcaecamper',
    'tenetur commodi id officia enim et perferendis quibusdam',
    'Non odit cupidait stigalisum debitis et dignissimos inventore ut galisum'
  ],
  department: 'Development',
  recruitmentPeriod: 'may/17/21 to may/30/21',
  hiringManager: 'Hina Iftikhar',
  jobType: 'Full Time',
  experiences: '3+ years',
  location: 'Karachi',
  salary: '85k-90k',
  status: 'Onsite'
};

const attachments = [
  { name: 'requirement.pdf', path: '/attachments/requirement.pdf' },
  { name: 'requirement.jpg', path: '/attachments/requirement.jpg' }
];

export default function JobDescriptionPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <Link href="/" className="text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <span className="text-gray-500">›</span>
        <Link href="/recruitment" className="text-gray-500">Recruitment</Link>
        <span className="text-gray-500">›</span>
        <Link href="/job-board" className="text-gray-500">Job Board</Link>
        <span className="text-gray-500">›</span>
        <span className="text-purple-600">Job Description</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Job Description</h1>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Edit Job
        </Button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Job Title */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-gray-500 mb-2">Job Title</h3>
            <h2 className="text-purple-600 text-lg font-medium">{jobDetails.title}</h2>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {jobDetails.description}
            </p>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium mb-4">Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {jobDetails.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium mb-4">Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {jobDetails.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Attachments */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium mb-4">Attachments</h3>
            <div className="grid grid-cols-2 gap-4">
              {attachments.map((attachment, index) => (
                <div key={index} className="border rounded-lg p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{attachment.name}</p>
                    <p className="text-sm text-gray-500">Click to download</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium mb-4">Job Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Department</p>
                <p className="font-medium">{jobDetails.department}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Recruitment Period</p>
                <p className="font-medium">{jobDetails.recruitmentPeriod}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Hiring manager</p>
                <p className="font-medium">{jobDetails.hiringManager}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Job Type</p>
                <p className="font-medium">{jobDetails.jobType}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Experiences</p>
                <p className="font-medium">{jobDetails.experiences}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="font-medium">{jobDetails.location}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Salary</p>
                <p className="font-medium">{jobDetails.salary}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Status</p>
                <p className="font-medium">{jobDetails.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
