"use client"
import Image from "next/image";
import React from "react";
import { UserButton } from '@clerk/nextjs'
import { useRouter, usePathname } from "next/navigation";

function Header() {
    const path = usePathname();
    const router = useRouter();

    const handleNavigation = (route) => {
        router.push(route);
    };

    return (
        <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
            <Image src={"/logo.svg"} width={70} height={50} alt="logo" />
            <ul className="hidden md:flex gap-6">
                <li 
                    onClick={() => handleNavigation('/dashboard')}
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === '/dashboard' && 'text-primary font-bold'}`}
                >
                    Dashboard
                </li>
                <li 
                    // onClick={() => handleNavigation('/dashboard/questions')}
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === '/dashboard/questions' && 'text-primary font-bold'}`}
                >
                    Questions
                </li>
                <li 
                    onClick={() => handleNavigation('/dashboard/upgrade')}
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}
                >
                    Upgrade
                </li>
                <li 
                    // onClick={() => handleNavigation('/dashboard/how')}
                    className={`hover:text-primary hover:font-bold transition-all cursor-pointer
                    ${path === '/dashboard/how' && 'text-primary font-bold'}`}
                >
                    How it Works?
                </li>
            </ul>
            <UserButton />
        </div>
    );
}

export default Header;
