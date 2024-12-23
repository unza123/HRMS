'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

type JobStatus = 'open' | 'closed' | 'cancelled' | 'contract' | 'part time' | 'full time' | 'interviewing'

interface Job {
  id: string
  title: string
  department: string
  status: JobStatus
  applicants?: number
  jobType: string
  published: string
  publishedDate?: string
}

const jobs: Job[] = [
  {
    id: '0021-PD',
    title: 'Product Designer',
    department: 'Design',
    status: 'open',
    applicants: 45,
    jobType: 'full time',
    published: 'Jan 4, 2022'
  },
  {
    id: '0034',
    title: 'Product Manager',
    department: 'Management',
    status: 'open',
    jobType: 'full time',
    published: '-'
  },
  {
    id: '0069-FD',
    title: 'Frontend Developer',
    department: 'Development',
    status: 'open',
    applicants: 70,
    jobType: 'contract',
    published: 'Jan 4, 2022'
  },
  {
    id: '0045-BD',
    title: 'Backend Developer',
    department: 'Development',
    status: 'closed',
    applicants: 45,
    jobType: 'full time',
    published: 'Jan 4, 2022'
  },
  {
    id: '0074-UD',
    title: 'Fullstack Developer',
    department: 'Development',
    status: 'open',
    applicants: 76,
    jobType: 'part time',
    published: 'Jan 4, 2022'
  },
  {
    id: '0065-QE',
    title: 'UX Designer',
    department: 'Design',
    status: 'open',
    applicants: 23,
    jobType: 'contract',
    published: 'Jan 4, 2022'
  },
  {
    id: '0056-UC',
    title: 'UX Copywriter',
    department: 'Design',
    status: 'cancelled',
    jobType: 'full time',
    published: '-'
  },
  {
    id: '0056-UC',
    title: 'UI Designer',
    department: 'Design',
    status: 'open',
    applicants: 15,
    jobType: 'interviewing',
    published: 'Jan 4, 2022'
  },
  {
    id: '0058-QE',
    title: 'QA Engineer',
    department: 'Development',
    status: 'open',
    applicants: 23,
    jobType: 'full time',
    published: 'Jan 4, 2022'
  }
]

const monthlyData = [
  { month: 'Jan', totalJobs: 70, openJobs: 45, jobApplied: 25 },
  { month: 'Feb', totalJobs: 72, openJobs: 48, jobApplied: 28 },
  { month: 'Mar', totalJobs: 75, openJobs: 50, jobApplied: 30 },
  { month: 'Apr', totalJobs: 73, openJobs: 47, jobApplied: 32 },
  { month: 'May', totalJobs: 74, openJobs: 49, jobApplied: 31 },
  { month: 'Jun', totalJobs: 76, openJobs: 51, jobApplied: 33 },
  { month: 'Jul', totalJobs: 75, openJobs: 50, jobApplied: 35 },
  { month: 'Aug', totalJobs: 77, openJobs: 52, jobApplied: 34 },
  { month: 'Sep', totalJobs: 78, openJobs: 53, jobApplied: 36 },
  { month: 'Oct', totalJobs: 80, openJobs: 55, jobApplied: 38 },
  { month: 'Nov', totalJobs: 82, openJobs: 56, jobApplied: 40 },
  { month: 'Dec', totalJobs: 85, openJobs: 58, jobApplied: 42 }
]

const departmentData = [
  { name: 'Development', value: 40 },
  { name: 'Design', value: 25 },
  { name: 'Marketing', value: 15 },
  { name: 'Finance', value: 12 },
  { name: 'Administration', value: 8 }
]

const COLORS = ['#7C3AED', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE']

export default function JobBoardPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All')
  const [selectedJobType, setSelectedJobType] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedPublished, setSelectedPublished] = useState('All')

  const stats = [
    {
      label: 'Total Jobs',
      value: 45,
      change: '+100%'
    },
    {
      label: 'Open Jobs',
      value: 210,
      change: '+150%'
    },
    {
      label: 'Job Applied',
      value: 316,
      change: '+150%'
    }
  ]

  return (
    <div className="p-6">
      {/* Header with Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <Link href="/" className="text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <span className="text-gray-500">›</span>
        <span className="text-gray-500">Recruitment</span>
        <span className="text-gray-500">›</span>
        <span className="text-purple-600">Job Board</span>
      </div>

      {/* Title and Add Job Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Job Board</h1>
        <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => window.location.href = '/job-board/add'}>
          + Add Job
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Job Statistics Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold">Job Statics</h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                <span className="text-sm text-gray-600">Total Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-sm text-gray-600">Open Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                <span className="text-sm text-gray-600">Job Applied</span>
              </div>
            </div>
          </div>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="totalJobs" 
                  stroke="#7C3AED" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="openJobs" 
                  stroke="#A78BFA" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="jobApplied" 
                  stroke="#C4B5FD" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Job Opening Departments Pie Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold mb-6">Job Opening Departments</h2>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]}
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {departmentData.map((dept, index) => (
                <div key={dept.name} className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span className="text-sm text-gray-600">{dept.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-600 mb-2">Total Jobs</div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold">45</div>
            <div className="text-green-500 text-sm">+100%</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-600 mb-2">Open Jobs</div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold">210</div>
            <div className="text-green-500 text-sm">+150%</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-gray-600 mb-2">Job Applied</div>
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold">316</div>
            <div className="text-green-500 text-sm">+150%</div>
          </div>
        </div>
      </div>

      {/* Job List Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">Job List</h2>
            <span className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded">76 Jobs</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-gray-600">
              <span className="mr-2">↓</span> Download PDF
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => window.location.href = '/job-board/add'}>
              <span className="mr-2">+</span> Add Jobs
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Input 
              type="search" 
              placeholder="Search Job" 
              className="w-full"
            />
          </div>
          <select 
            className="px-3 py-2 bg-white border rounded-md text-sm"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option>All</option>
            <option>Development</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
          <select 
            className="px-3 py-2 bg-white border rounded-md text-sm"
            value={selectedJobType}
            onChange={(e) => setSelectedJobType(e.target.value)}
          >
            <option>All</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
          </select>
          <select 
            className="px-3 py-2 bg-white border rounded-md text-sm"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option>All</option>
            <option>Open</option>
            <option>Closed</option>
            <option>Cancelled</option>
          </select>
          <select 
            className="px-3 py-2 bg-white border rounded-md text-sm"
            value={selectedPublished}
            onChange={(e) => setSelectedPublished(e.target.value)}
          >
            <option>All</option>
            <option>Published</option>
            <option>Not Published</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b text-sm text-gray-600">
              <th className="pb-3 text-left font-medium">Job Id</th>
              <th className="pb-3 text-left font-medium">Job Title</th>
              <th className="pb-3 text-left font-medium">Department</th>
              <th className="pb-3 text-left font-medium">Status</th>
              <th className="pb-3 text-left font-medium">Applicants</th>
              <th className="pb-3 text-left font-medium">Job Type</th>
              <th className="pb-3 text-left font-medium">Published</th>
              <th className="pb-3 text-left font-medium">Published Date</th>
              <th className="pb-3 text-left font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-b last:border-b-0 hover:bg-gray-50 cursor-pointer" onClick={() => window.location.href = `/job-board/${job.id}`}>
                <td className="py-4">{job.id}</td>
                <td className="py-4">
                  <div className="font-medium">{job.title}</div>
                </td>
                <td className="py-4">{job.department}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    job.status === 'open' ? 'text-green-600 bg-green-50' :
                    job.status === 'closed' ? 'text-blue-600 bg-blue-50' :
                    job.status === 'cancelled' ? 'text-red-600 bg-red-50' :
                    job.status === 'contract' ? 'text-blue-600 bg-blue-50' :
                    job.status === 'part time' ? 'text-pink-600 bg-pink-50' :
                    job.status === 'interviewing' ? 'text-purple-600 bg-purple-50' :
                    'text-gray-600 bg-gray-50'
                  }`}>
                    {job.status}
                  </span>
                </td>
                <td className="py-4">{job.applicants || '-'}</td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    job.jobType === 'full time' ? 'text-green-600 bg-green-50' :
                    job.jobType === 'part time' ? 'text-pink-600 bg-pink-50' :
                    job.jobType === 'contract' ? 'text-blue-600 bg-blue-50' :
                    job.jobType === 'interviewing' ? 'text-purple-600 bg-purple-50' :
                    'text-gray-600 bg-gray-50'
                  }`}>
                    {job.jobType}
                  </span>
                </td>
                <td className="py-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
                    ✓
                  </div>
                </td>
                <td className="py-4">{job.published}</td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-gray-600">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-6 text-sm">
          <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            ← Previous
          </button>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-purple-600 text-white">1</span>
            <span className="px-3 py-1 rounded hover:bg-gray-100">2</span>
            <span className="px-3 py-1 rounded hover:bg-gray-100">3</span>
            <span>...</span>
            <span className="px-3 py-1 rounded hover:bg-gray-100">8</span>
            <span className="px-3 py-1 rounded hover:bg-gray-100">9</span>
            <span className="px-3 py-1 rounded hover:bg-gray-100">10</span>
          </div>
          <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
