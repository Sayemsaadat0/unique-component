"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Sidebar = () => {
    const pathName = usePathname();
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'service', path: '/service' },
    ];

    return (
        <div className="px-2">
            {links.map((link, index) => (
                <div className='flex flex-col my-1' key={index}>
                    <Link
                        className={` rounded-[15px] text-sm text-center w-full px-2 py-1 ${pathName === link.path ? 'bg-white/20 text-white' : 'text-white hover:bg-white/20'
                            }`} href={link.path}>

                        {link.name}

                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
