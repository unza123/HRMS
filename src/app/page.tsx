import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/attendance/list')
}
