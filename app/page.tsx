import Button from '@/app/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col bg-primary min-h-screen items-center justify-center p-6'>
      <div className='flex flex-col rounded-xl bg-white p-6 gap-6'>
        <div>
          <h1 className='text-xl font-bold'>Welcome to OpenBI.</h1>
        </div>
        <div>
        <h4>A free, open source data analytics platform built on React, Next.js and React DataGrids.</h4>
        </div>
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </div>
    </main>
  );
}
