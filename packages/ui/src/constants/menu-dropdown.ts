export interface MenuInterface {
    name: any;
    url: string;
    subItems?: MenuInterface[];
    class?: string;
    col?: number;
    active?: boolean;
}

export const mainMenu: MenuInterface[] = [
    {
        name: "Home",
        url: "/",
        active: true,
    },
    {
        name: "About",
        url: "/about",
        active: true,
    },
    {
        name: "Portfolio",
        url: "/portfolio",
        active: true,
    },

    // {
    //     name: "Testimonials",
    //     url: "/",
    //     active: true,
    // },
    // {
    //     name: "Contact",
    //     url: "/contact",
    //     active: true,
    // },
];
