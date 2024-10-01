import Button from '@/app/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col bg-primary min-h-screen items-center justify-center p-6'>
      <div className='flex flex-col rounded-xl bg-white p-6 gap-6 md:px-20'>
        <div>
          <h1 className='text-xl font-bold'>Welcome to OpenBI.</h1>
        </div>
        <div>
        <h4 className='text-lg'>A free, open source data analytics platform <br /> built on <span className='font-bold'>React</span>, <span className='font-bold'>Next.js</span> and <span className='font-bold'>React DataGrids</span>.</h4>
        </div>
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </div>
    </main>
  );
}
