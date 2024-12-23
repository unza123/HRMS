'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

type AttendanceStatus = 'all' | 'present' | 'absent' | 'on-leave' | 'leave-request'
type ViewMode = 'attendance' | 'leave' | 'requests'

interface Employee {
  id: string
  name: string
  role: string
  department: string
  avatar: string
  status: string
  punchIn?: string
  punchOut?: string
  leaveType?: string
  fromDate?: string
  toDate?: string
  days?: number
  reason: string
  requestStatus?: 'New' | 'Approved' | 'Pending'
}

const employees: Employee[] = [
  {
    id: '0021-PD',
    name: 'Olivia Rhye',
    role: 'Product Designer',
    department: 'Design',
    avatar: '/avatars/olivia.jpg',
    status: 'on-leave',
    leaveType: 'LOP',
    fromDate: '22 Jan 2022',
    toDate: '22 Jan 2022',
    days: 2,
    reason: 'Personal',
    requestStatus: 'New',
    punchIn: '10 am',
    punchOut: '7 PM'
  },
  {
    id: '0034-PM',
    name: 'Phoenix Baker',
    role: 'Product Manager',
    department: 'Management',
    avatar: '/avatars/phoenix.jpg',
    status: 'half-day-leave',
    leaveType: 'paternity leave',
    fromDate: '20 Jan 2022',
    toDate: '20 Jan 2022',
    days: 1,
    reason: 'visit doctor',
    requestStatus: 'Approved',
    punchIn: '10:15 am',
    punchOut: '7:15 pm'
  },
  {
    id: '0069-FD',
    name: 'Lana Steiner',
    role: 'Frontend Developer',
    department: 'Development',
    avatar: '/avatars/lana.jpg',
    status: 'on-leave',
    leaveType: 'Casual Leave',
    fromDate: '24 Jan 2022',
    toDate: '24 Jan 2022',
    days: 2,
    reason: "Grandma's Funeral",
    requestStatus: 'Pending',
    punchIn: '10 am',
    punchOut: '7 pm'
  },
  {
    id: '0045-BD',
    name: 'Demi Wilkinson',
    role: 'Backend Developer',
    department: 'Development',
    avatar: '/avatars/demi.jpg',
    status: 'on-leave',
    leaveType: 'casual leave',
    fromDate: '26 Jan 2022',
    toDate: '26 Jan 2022',
    days: 1,
    reason: 'To get driving Licence',
    requestStatus: 'Approved',
    punchIn: '10 am',
    punchOut: '7 pm'
  },
  {
    id: '0074-UD',
    name: 'Candice Wu',
    role: 'UX Designer',
    department: 'Development',
    avatar: '/avatars/candice.jpg',
    status: 'half-day-leave',
    leaveType: 'LOP',
    fromDate: '18 Jan 2022',
    toDate: '18 Jan 2022',
    days: 1,
    reason: 'To Take University Exam',
    requestStatus: 'Pending',
    punchIn: '10 am',
    punchOut: '7 pm'
  },
  {
    id: '0065-QE',
    name: 'Natali Craig',
    role: 'QA Engineer',
    department: 'Design',
    avatar: '/avatars/natali.jpg',
    status: 'on-leave',
    leaveType: 'Casual Leave',
    fromDate: '28 Jan 2022',
    toDate: '28 Jan 2022',
    days: 2,
    reason: 'visit home village',
    requestStatus: 'New',
    punchIn: '10:20 am',
    punchOut: '7:20 pm'
  },
  {
    id: '0056-UC',
    name: 'Drew Cano',
    role: 'UX Copywriter',
    department: 'Design',
    avatar: '/avatars/drew.jpg',
    status: 'half-day-leave',
    leaveType: 'sick leave',
    fromDate: '16 Jan 2022',
    toDate: '-',
    days: 1,
    reason: 'visit doctor',
    requestStatus: 'Approved',
    punchIn: '10 am',
    punchOut: '7 pm'
  }
]

export default function AttendancePage() {
  const [selectedStatus, setSelectedStatus] = useState<AttendanceStatus>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('attendance')
  const [selectedDate, setSelectedDate] = useState('Jan 6, 2022')

  const getTableHeaders = () => {
    switch (viewMode) {
      case 'attendance':
        return (
          <tr className="border-b text-sm text-gray-600">
            <th className="pb-3 text-left font-medium">
              <input type="checkbox" className="mr-3" />
              Employee Id
            </th>
            <th className="pb-3 text-left font-medium">Employee</th>
            <th className="pb-3 text-left font-medium">Department</th>
            <th className="pb-3 text-left font-medium">Attendance</th>
            <th className="pb-3 text-left font-medium">Punch In-Punch Out</th>
            <th className="pb-3 text-left font-medium"></th>
          </tr>
        )
      case 'leave':
        return (
          <tr className="border-b text-sm text-gray-600">
            <th className="pb-3 text-left font-medium">
              <input type="checkbox" className="mr-3" />
              Employee Id
            </th>
            <th className="pb-3 text-left font-medium">Employee</th>
            <th className="pb-3 text-left font-medium">Department</th>
            <th className="pb-3 text-left font-medium">Attendance</th>
            <th className="pb-3 text-left font-medium">Reason</th>
            <th className="pb-3 text-left font-medium"></th>
          </tr>
        )
      case 'requests':
        return (
          <tr className="border-b text-sm text-gray-600">
            <th className="pb-3 text-left font-medium">Employee Id</th>
            <th className="pb-3 text-left font-medium">Employee</th>
            <th className="pb-3 text-left font-medium">Leave Type</th>
            <th className="pb-3 text-left font-medium">From</th>
            <th className="pb-3 text-left font-medium">To</th>
            <th className="pb-3 text-left font-medium">Days</th>
            <th className="pb-3 text-left font-medium">Reason</th>
            <th className="pb-3 text-left font-medium">Request</th>
            <th className="pb-3 text-left font-medium"></th>
          </tr>
        )
    }
  }

  const getTableRow = (employee: Employee) => {
    switch (viewMode) {
      case 'attendance':
        return (
          <tr key={employee.id} className="border-b last:border-b-0">
            <td className="py-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                {employee.id}
              </div>
            </td>
            <td className="py-4">
              <Link 
                href={`/attendance/${employee.id}`}
                className="flex items-center gap-3 hover:text-purple-600"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img src={employee.avatar} alt={employee.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">{employee.name}</div>
                  <div className="text-sm text-gray-600">{employee.role}</div>
                </div>
              </Link>
            </td>
            <td className="py-4">{employee.department}</td>
            <td className="py-4">
              <div className="flex items-center justify-center w-6 h-6">
                <input type="checkbox" checked={employee.status !== 'absent'} readOnly />
              </div>
            </td>
            <td className="py-4 text-gray-600">{employee.punchIn} - {employee.punchOut}</td>
            <td className="py-4">
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </td>
          </tr>
        )
      case 'leave':
        return (
          <tr key={employee.id} className="border-b last:border-b-0">
            <td className="py-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                {employee.id}
              </div>
            </td>
            <td className="py-4">
              <Link 
                href={`/attendance/${employee.id}`}
                className="flex items-center gap-3 hover:text-purple-600"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img src={employee.avatar} alt={employee.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">{employee.name}</div>
                  <div className="text-sm text-gray-600">{employee.role}</div>
                </div>
              </Link>
            </td>
            <td className="py-4">{employee.department}</td>
            <td className="py-4">
              <span className={`text-purple-600 ${
                employee.status === 'half-day-leave' ? 'bg-purple-50' : ''
              } px-2 py-1 rounded-full`}>
                {employee.status === 'on-leave' ? 'On Leave' : 'Half Day Leave'}
              </span>
            </td>
            <td className="py-4 text-gray-600">{employee.reason}</td>
            <td className="py-4">
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </td>
          </tr>
        )
      case 'requests':
        return (
          <tr key={employee.id} className="border-b last:border-b-0">
            <td className="py-4">{employee.id}</td>
            <td className="py-4">
              <Link 
                href={`/attendance/${employee.id}`}
                className="flex items-center gap-3 hover:text-purple-600"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img src={employee.avatar} alt={employee.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">{employee.name}</div>
                  <div className="text-sm text-gray-600">{employee.role}</div>
                </div>
              </Link>
            </td>
            <td className="py-4">{employee.leaveType}</td>
            <td className="py-4">{employee.fromDate}</td>
            <td className="py-4">{employee.toDate}</td>
            <td className="py-4">{employee.days}</td>
            <td className="py-4">{employee.reason}</td>
            <td className="py-4">
              <span className={`${
                employee.requestStatus === 'New' ? 'text-blue-600' :
                employee.requestStatus === 'Approved' ? 'text-purple-600' :
                'text-orange-600'
              }`}>
                • {employee.requestStatus}
              </span>
            </td>
            <td className="py-4">
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </td>
          </tr>
        )
    }
  }

  const stats = [
    {
      label: 'Total Attendance',
      value: 145,
      status: 'all' as AttendanceStatus,
      showProgressBar: true
    },
    {
      label: 'Total Present',
      value: 120,
      status: 'present' as AttendanceStatus
    },
    {
      label: 'Absent',
      value: 4,
      status: 'absent' as AttendanceStatus
    },
    {
      label: 'On Leave',
      value: 25,
      status: 'on-leave' as AttendanceStatus
    },
    {
      label: 'Leave Request',
      value: 12,
      status: 'leave-request' as AttendanceStatus
    }
  ]

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Attendance</h1>
        <div className="text-sm text-gray-600">{selectedDate}</div>
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-xl border p-6 mb-8">
        <div className="grid grid-cols-5 gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              onClick={() => {
                setSelectedStatus(stat.status)
                if (index === 0) setViewMode('attendance')
                else if (index === 3) setViewMode('leave')
                else if (index === 4) setViewMode('requests')
              }}
              className={`cursor-pointer transition-colors ${
                selectedStatus === stat.status ? 'bg-purple-50 p-4 rounded-lg' : ''
              }`}
            >
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="text-2xl font-semibold">{stat.value}</div>
                <div className="text-green-500 text-sm">+</div>
              </div>
              {stat.showProgressBar && (
                <div className="mt-2 h-1 bg-purple-100 rounded-full">
                  <div className="h-full w-[85%] bg-purple-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">Employee List</h2>
            <span className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded">
              {viewMode === 'requests' ? '12 Employee' : '145 Applicants'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-gray-600">
              <span className="mr-2">↓</span> Download PDF
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <span className="mr-2">+</span> {viewMode === 'requests' ? 'Add Applicant' : 'Add Employee'}
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Input 
              type="search" 
              placeholder="Search Employee" 
              className="w-full"
            />
          </div>
          {viewMode === 'requests' ? (
            <>
              <select className="px-3 py-2 bg-white border rounded-md text-sm w-48">
                <option>Leave Type</option>
              </select>
              <select className="px-3 py-2 bg-white border rounded-md text-sm w-48">
                <option>Request</option>
              </select>
            </>
          ) : (
            <>
              <select className="px-3 py-2 bg-white border rounded-md text-sm w-48">
                <option>All</option>
                <option>Present</option>
                <option>Absent</option>
                <option>On Leave</option>
              </select>
              <Input 
                type="text"
                className="w-64"
                placeholder="Select date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </>
          )}
        </div>

        <table className="w-full">
          <thead>
            {getTableHeaders()}
          </thead>
          <tbody>
            {employees.map((employee) => getTableRow(employee))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-6 text-sm">
          <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
            ← Back
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
