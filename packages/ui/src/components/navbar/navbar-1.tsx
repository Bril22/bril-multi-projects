"use client";

import Link from "next/link";
import { Icons } from "../icons";
import { IconNames } from "../icons/interface";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { INavbar } from "./interface";

export const Navbar1Component = ({
  menu,
}: INavbar) => {
  const [active, setActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      setActive(true);
    }
  }, [pathname]);

  return (
    <ul className={`absolute top-0 left-0 right-0 z-20 menu menu-horizontal text-white items-center justify-center h-20`}>
      {menu?.map((item, index) => {
        // const isActive = pathname === '/' && item.name === 'home' || pathname.includes(item.name);
        return (
          item.active && (
            <li key={index} className={`justify-center hover:bg-based-primary/20 rounded-md text-white ${active ? "font-semibold" : ""}`}>
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
                <Link href={item.url} className={`px-8 text-white`}>
                  {item.name.toUpperCase()}
                </Link>
              )}
            </li>
          )
        );
      })}
    </ul>
  );
};
