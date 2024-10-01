import SideNav from "@/app/ui/sidenav"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex md:h-screen p-2">
            <SideNav/>
            </div>
            <div className="flex flex-col flex-grow">
                {children}
            </div>
        </div>
    )

}