"use client";

import Link from "next/link";
import { Icons } from "../icons";
import { IconNames } from "../icons/interface";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { INavbar } from "./interface";
import Image from "next/image";

export const Navbar2Component = ({
    menu,
    title,
    logo,
    socialMedia,
}: INavbar) => {
    const [active, setActive] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            setActive(true);
        }
    }, [pathname]);

    return (
        <ul className={`absolute top-0 left-0 right-0 z-20`}>
            <div className="container mx-auto flex items-center justify-between text-white h-20 px-4">
                {title &&
                    <Link href="/" className="text-lg font-bold">
                        {title}
                    </Link>
                }
                {logo && (
                    <Link href="/" className="w-12 h-12">
                        <Image src={logo} alt="logo" className="w-full h-full object-cover" />
                    </Link>
                )}
                <div className="menu menu-horizontal items-center justify-between">
                    {menu?.map((item, index) => {
                        // const isActive = pathname === '/' && item.name === 'home' || pathname.includes(item.name);
                        return (
                            item.active && (
                                <li key={index} className={`justify-center hover:bg-[#85adaf] rounded-md text-white ${active ? "font-semibold" : ""}`}>
                                    {item.subItems ? (
                                        <div className="dropdown dropdown-hover px-8 dropdown-bottom">
                                            <div
                                                tabIndex={0}
                                                role="button"
                                                className="flex gap-4 items-center text-white"
                                            >
                                                {item.name.toUpperCase()}{" "}
                                                <Icons name={IconNames["arrow-down"]} size={20} />
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className="dropdown-content menu rounded-md z-[1] w-60 p-0 shadow ml-0 divide-y divide-[#00afef2e] "
                                            >
                                                {item.subItems.map(
                                                    (subItem, index) =>
                                                        subItem.active && (
                                                            <li key={index}>
                                                                <Link
                                                                    href={subItem.url}
                                                                    className="p-3 pl-8 text-white"
                                                                >
                                                                    {subItem.name.toUpperCase()}
                                                                </Link>
                                                            </li>
                                                        )
                                                )}
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link href={item.url} className="px-8 text-white">
                                            {item.name.toUpperCase()}
                                        </Link>
                                    )}
                                </li>
                            )
                        );
                    })}
                </div>
                {socialMedia && (
                    <div className='flex gap-2'>
                        {socialMedia?.map((item, i) => (
                            <Link href={item.url!} key={i} className='flex gap-2 max-w-44' target="_blank">
                                <Icons name={item.name} size={26} />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </ul>
    );
};
