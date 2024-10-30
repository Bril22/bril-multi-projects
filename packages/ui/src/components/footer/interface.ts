import { StaticImageData } from "next/image";
import { IconNames } from "../icons/interface";

export type Icon = {
    name: IconNames;
    url?: string;
}

export type Content = {
    title: string;
    link?: string;
    icon?: IconNames;
};
export type FooterList = {
    title: string;
    content: Content[];
}[];

export interface IFooter {
    img?: string | StaticImageData;
    title?: string;
    description?: string;
    footerList?: FooterList[];
    socialMedia?: Icon[];
    copyright?: string;
}