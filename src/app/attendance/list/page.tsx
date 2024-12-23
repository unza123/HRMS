import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const employees = [
  {
    id: '0021-PD',
    name: 'Olivia Rhye',
    role: 'Product Designer',
    department: 'Design',
    avatar: '/avatars/olivia.jpg',
    present: true
  },
  {
    id: '0034-PM',
    name: 'Phoenix Baker',
    role: 'Product Manager',
    department: 'Management',
    avatar: '/avatars/phoenix.jpg',
    present: true
  },
  {
    id: '0069-FD',
    name: 'Lana Steiner',
    role: 'Frontend Developer',
    department: 'Development',
    avatar: '/avatars/lana.jpg',
    present: false
  },
  {
    id: '0045-BD',
    name: 'Demi Wilkinson',
    role: 'Backend Developer',
    department: 'Development',
    avatar: '/avatars/demi.jpg',
    present: true
  },
  {
    id: '0074-UD',
    name: 'Candice Wu',
    role: 'UX Designer',
    department: 'Development',
    avatar: '/avatars/candice.jpg',
    present: true
  },
  {
    id: '0065-QE',
    name: 'Natali Craig',
    role: 'QA Engineer',
    department: 'Design',
    avatar: '/avatars/natali.jpg',
    present: false
  },
  {
    id: '0056-UC',
    name: 'Drew Cano',
    role: 'UX Copywriter',
    department: 'Design',
    avatar: '/avatars/drew.jpg',
    present: true
  }
]

export default function AttendanceListPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <span>/</span>
        <Link href="/employees" className="hover:text-gray-900">Employees</Link>
        <span>/</span>
        <span className="text-purple-600">Attendance</span>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Attendance</h1>
        <div className="text-sm text-gray-600">Jan 6, 2022</div>
      </div>

      <div className="grid grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-xl border p-4">
          <div className="text-sm text-gray-600 mb-2">Total Attendance</div>
          <div className="flex items-center">
            <div className="text-2xl font-semibold mr-2">145</div>
            <div className="text-green-500 text-sm">+</div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <div className="text-sm text-gray-600 mb-2">Total Present</div>
          <div className="flex items-center">
            <div className="text-2xl font-semibold mr-2">120</div>
            <div className="text-green-500 text-sm">+</div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <div className="text-sm text-gray-600 mb-2">Absent</div>
          <div className="flex items-center">
            <div className="text-2xl font-semibold mr-2">4</div>
            <div className="text-green-500 text-sm">+</div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <div className="text-sm text-gray-600 mb-2">On Leave</div>
          <div className="flex items-center">
            <div className="text-2xl font-semibold mr-2">25</div>
            <div className="text-green-500 text-sm">+</div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <div className="text-sm text-gray-600 mb-2">Leave Request</div>
          <div className="flex items-center">
            <div className="text-2xl font-semibold mr-2">12</div>
            <div className="text-green-500 text-sm">+</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">Attendance List</h2>
            <span className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded">145 Attendees</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-gray-600">
              <span className="mr-2">↓</span> Download PDF
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <span className="mr-2">+</span> Add Employee
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
          <select className="px-3 py-2 bg-white border rounded-md text-sm">
            <option>All</option>
            <option>Present</option>
            <option>Absent</option>
            <option>On Leave</option>
          </select>
          <Input 
            type="date" 
            className="w-48"
            defaultValue="2022-01-06"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b text-sm text-gray-600">
              <th className="pb-3 text-left font-medium">
                <input type="checkbox" className="mr-3" />
                Employee Id
              </th>
              <th className="pb-3 text-left font-medium">Employee</th>
              <th className="pb-3 text-left font-medium">Department</th>
              <th className="pb-3 text-left font-medium">Attendance</th>
              <th className="pb-3 text-left font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
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
                  <div className={`w-3 h-3 rounded-full ${employee.present ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-gray-600">⋮</button>
                </td>
              </tr>
            ))}
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
