import { StarIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const transactions = [
  { name: 'Spotify', amount: '-$18.99', time: 'Wednesday 1:00pm' },
  { name: 'A Coffee', amount: '-$4.50', time: 'Wednesday 7:20am' },
  { name: 'Stripe', amount: '+$88.00', time: 'Wednesday 2:45am' },
  { name: 'Figma', amount: '-$15.00', time: 'Tuesday 8:10pm' },
  { name: 'TBF Bakery', amount: '-$12.50', time: 'Tuesday 7:52am' },
  { name: 'Fresh F&V', amount: '-$40.20', time: 'Tuesday 12:15pm' },
  { name: 'Stripe', amount: '+$88.00', time: 'Tuesday 5:40am' },
  { name: 'Rosso Antico', amount: '-$60.00', time: 'Sunday 8:10pm' },
  { name: "PA's Wine", amount: '-$32.00', time: 'Sunday 7:05pm' },
  { name: 'Cherry Moon', amount: '-$16.50', time: 'Sunday 12:52pm' },
]

export default function EmployeeDetailPage({ params }: { params: { id: string } }) {
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

      <div className="grid grid-cols-12 gap-8">
        {/* Employee Profile Section */}
        <div className="col-span-4">
          <div className="bg-white rounded-xl border p-6 w-[290px] h-[831px] top-[185px] left-[347px] rounded-tl-[8px] rounded-bl-[0px] rounded-br-[0px] rounded-tr-[0px] border-t border-l-0 border-r-0 border-b-0 ">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src="/avatars/candice.jpg"
                  alt="Candice Wu"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold leading-8 text-center custom-underline"> Candice Wu</h2>

              <div className="bg-[#EAECF0] w-[258px] h-[1px] mt-5 mb-8">  </div>
              <Card className="w-[258px]  top-[391px] left-[363px]" style={{ padding: "12px 35px 15px 20px" }} >

                <CardContent className="p-0 text-lg font-medium text-left underline decoration-transparent">
                  Product Designer
                </CardContent>
                <CardDescription>Full Time</CardDescription>
              </Card>
              
              <Card className="w-[258px]  top-[391px] left-[363px] my-4" style={{ padding: "12px 35px 15px 20px" }} >
                <CardContent className="p-0 text-[16px] mb-2  font-medium text-left underline decoration-transparent">Status</CardContent>
                <Badge variant="outline" className="bg-[#F9F5FF] w-[99px] h-[24px] pl-3 pr-4 pt-2 pb-2 rounded-[25px]  text-[#6941C6] flex gap-1.5"><div className="w-7 p-1 h-2 rounded-full bg-[#9E77ED]"></div> Screening</Badge>
              </Card>
            {/*   <Card className="w-[258px]  top-[391px] left-[363px] my-4" style={{ padding: "12px 35px 15px 20px" }} >
                <CardContent className="p-0 text-[16px] mb-2  font-medium text-left underline decoration-transparent">Status</CardContent>
                <Badge variant="outline" className="bg-[#F9F5FF] w-[99px] h-[24px] pl-3 pr-4 pt-2 pb-2 rounded-[25px]  text-[#6941C6] flex gap-1.5"><div className="w-7 p-1 h-2 rounded-full bg-[#9E77ED]"></div> Screening</Badge>
              </Card> */}
              <Card className="w-[258px]  top-[391px] left-[363px] my-2" style={{ padding: "12px 35px 15px 20px" }} >
             
              <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Rating</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                </Card>
           

            
                <Card className="w-[258px]  top-[391px] left-[363px] my-2" style={{ padding: "12px 35px 15px 20px" }} >
             
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Match</span>
                  <span className="text-sm text-gray-600">70%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-[70%] bg-purple-600 rounded-full"></div>
                </div>
              </Card>

              <div className="pt-6 border-t">
                <h3 className="text-sm font-medium mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      ✉️
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="text-sm">hi@candicewu.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Phone</div>
                      <div className="text-sm">0456786857578</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      📍
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Address</div>
                      <div className="text-sm">22 nazi apartment karachi</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Transactions Section */}
        <div className="col-span-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total attendance</span>
                <span className="text-sm text-green-500">+100%</span>
              </div>
              <div className="text-2xl font-semibold">45</div>
            </div>
            <div className="bg-white rounded-xl border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Leaves</span>
                <span className="text-sm text-green-500">+100%</span>
              </div>
              <div className="text-2xl font-semibold">210</div>
            </div>
            <div className="bg-white rounded-xl border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Remaining Leaves</span>
                <span className="text-sm text-green-500">+100%</span>
              </div>
              <div className="text-2xl font-semibold">316</div>
            </div>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Recent transactions</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-medium">{transaction.name}</div>
                    <div className={`text-sm ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-gray-600'}`}>
                      {transaction.amount}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">{transaction.time}</div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link href="/attendance/list" className="inline-flex items-center mt-6 text-sm text-gray-600 hover:text-gray-900">
        ← back
      </Link>
    </div>
  )
}
