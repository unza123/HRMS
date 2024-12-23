'use client';
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Link from 'next/link';
const monthlyData = [
  { name: 'Jan', value: 240 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 280 },
  { name: 'Apr', value: 260 },
  { name: 'May', value: 320 },
  { name: 'Jun', value: 280 },
  { name: 'Jul', value: 300 },
  { name: 'Aug', value: 340 },
  { name: 'Sep', value: 280 },
  { name: 'Oct', value: 260 },
  { name: 'Nov', value: 240 },
  { name: 'Dec', value: 220 },
];

const pieData = [
  { name: 'Not Applied', value: 60 },
  { name: 'Job Applied', value: 40 },
];

const COLORS = ['#E2E8F0', '#7C3AED'];

const applicants = [
  {
    id: 'OO1-PD',
    name: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    role: 'Product Designer',
    date: '22 Jan 2022',
    status: 'Applied',
    rating: 4,
  },
  {
    id: 'OO2-PM',
    name: 'Phoenix Baker',
    email: 'phoenix@untitledui.com',
    role: 'Product Manager',
    date: '20 Jan 2022',
    status: 'Screening',
    rating: 3,
  },
  // Add more applicants...
];

export default function ApplicantsPage() {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-gray-500">Recruitment</span>
        <span className="text-gray-500">›</span>
        <span className="text-purple-600">Applicants</span>
      </div>

      <h1 className="text-2xl font-semibold mb-8">Applicants</h1>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-base font-medium">Applicants</h3>
              <div className="flex gap-4 mt-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <span className="text-sm text-gray-600">New Applicants</span>
                  <span className="text-sm font-medium">240</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-200"></div>
                  <span className="text-sm text-gray-600">Total Applicants</span>
                  <span className="text-sm font-medium">345</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#7C3AED" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-base font-medium mb-4">Applications</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <span className="text-sm text-gray-600">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Applicant List Section */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-medium">Applicant List</h2>
            <div className="flex gap-2">
              <Button variant="outline" className="text-gray-600">
                Download PDF
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                + Add Applicant
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Input placeholder="Search Applicants" className="max-w-sm" />
            </div>
            <select className="px-3 py-2 rounded-md border">
              <option>All</option>
            </select>
            <select className="px-3 py-2 rounded-md border">
              <option>All</option>
            </select>
            <select className="px-3 py-2 rounded-md border">
              <option>All</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Applicant Id</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Applicant</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Role</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Applied Date</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Rating</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                  <tr key={applicant.id} className="border-b">
                  <td className="py-4 px-6">{applicant.id}</td>
                  <Link href={`/recruitment/applicants/${applicant.id}`} className="block hover:bg-gray-50">
              
                  <td className="py-4 px-6">
                
                    <div className="flex items-center gap-3">
                  
                      <Avatar>
                        <AvatarFallback>{applicant.name[0]}</AvatarFallback>
                      </Avatar>
                     
                      <div>
                      
                        <div className="font-medium">{applicant.name}</div>
                        <div className="text-sm text-gray-500">{applicant.email}</div>
                      </div>
                    </div>
                  </td>
                  </Link>
                  <td className="py-4 px-6">{applicant.role}</td>
                  <td className="py-4 px-6">{applicant.date}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      applicant.status === 'Applied' ? 'bg-green-100 text-green-800' :
                      applicant.status === 'Screening' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {applicant.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < applicant.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
               
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex justify-between items-center">
          <Button variant="outline" className="text-sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
              <Button
                key={i}
                variant={page === 1 ? 'default' : 'outline'}
                className={`w-10 h-10 p-0 ${page === 1 ? 'bg-purple-600' : ''}`}
              >
                {page}
              </Button>
            ))}
          </div>
          <Button variant="outline" className="text-sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
