import { StaticImageData } from "next/image";
import { Icons } from "../icons"
import { IconNames } from "../icons/interface"
import { SidebarLayout } from "./sidebar"
import { Icon } from "../footer";

export const LayoutTemplate = ({ 
    children,
    title,
    logo,
    socialMedia
}: { 
    children: React.ReactNode;
    title?: string;
    logo?: StaticImageData
    socialMedia?: Icon[]
}) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <div className="navbar w-full bg-transparent text-white p-0"> */}
                {/* <div className="container mx-auto items-center  "> */}
                {/* <div className="flex-none lg:hidden">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost absolute top-0 left-0 z-20"
                    >
                        <Icons name={IconNames["3-line-menu"]} className="text-white"/>
                    </label>
                </div> */}
                {children}
            </div>
            {/* <div className="drawer-side z-40">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <SidebarLayout title={title} logo={logo} socialMedia={socialMedia} />
            </div> */}
        </div>
    )
}