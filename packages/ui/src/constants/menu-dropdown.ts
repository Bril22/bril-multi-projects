interface MenuInterface {
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
        name: "Portfolio",
        url: "/",
        active: true,
    },
    {
        name: "About",
        url: "/",
        active: true,
    },
    {
        name: "Testimonials",
        url: "/",
        active: true,
    },
    {
        name: "Contact",
        url: "/",
        active: true,
    },
];
