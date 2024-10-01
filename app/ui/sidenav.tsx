import NavLinks from "@/app/ui/navlinks"
import Link from 'next/link'

export default function SideNav() {
    return (
        <div className="flex flex-row md:flex-col md:w-64 gap-1 rounded-xl">
            <Link href={'/dashboard'} className="flex h-20 md:h-40 p-2 md:p-6 items-end bg-primary text-white rounded-md justify-center">
            <div className="text-2xl font-bold">
                Open BI
            </div>
            </Link>
            <NavLinks/>
            <div className="flex grow bg-accent rounded-md"></div>
        </div>
    )
}