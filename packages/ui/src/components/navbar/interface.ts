import { MenuInterface } from "@/constants";
import { Icon } from "../footer";

export interface INavbar {
    menu?: MenuInterface[]
    title?: string;
    logo?: string;
    socialMedia?: Icon[];
}