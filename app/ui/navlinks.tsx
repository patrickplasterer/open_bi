"use client";

import {
    CircleStackIcon,
    ArrowDownTrayIcon,
    ChartBarSquareIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';



const navLinks = [
    {
        key: 1,
        name: 'My Datasets',
        href: '/dashboard/datasets',
        icon: CircleStackIcon,

    }, 
    {
        key: 2,
        name: 'Second Link',
        href: '/dashboard/second',
        icon: ArrowDownTrayIcon,

    }, 
    {
        key: 3,
        name: 'Third Link',
        href: '/dashboard/third',
        icon: ChartBarSquareIcon,

    }
];


export default function NavLinks() {
    return (
        <>
            {navLinks.map((link) => {
                const LinkIcon = link.icon;
                return (
                        <Link
                        key={link.key}
                        href={link.href}
                        className='flex p-6 gap-2 items-center rounded-md bg-accent hover:bg-primary'
                        >
                        <LinkIcon className='w-6 md:w-8'/>
                        <p className='hidden md:block'>{link.name}</p>
                        </Link>
                );
            })}
        </>
    );
}




