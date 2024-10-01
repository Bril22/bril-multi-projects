import { IconNames } from "@ui/components/icons/interface"

export const footerList = [
    [
        {
            title: "Useful Links",
            content: [
                { title: "Portfolio", link: "/portfolio" },
                { title: "Contact", link: "/contact" },
            ],
        },
    ],
    [
        {
            title: "Contact Me",
            content: [
                { title: "Phone", link: "tel:085220258757", icon: IconNames.phone },
                { title: "Gmail", link: "mailto:bernice.sukatendel08@gmail.com", icon: IconNames.email },
                // { title: "Twitter", link: "/news" },
                //   { title: "Podcasts", link: "/podcast" },
                //   { title: "Careers", link: "/careers" },

                // { title: "FAQ's", link: "/faqs" },
            ],
        },
    ],
]

export const socialMedia = [
    {
        name: IconNames.instagram,
        url: "https://www.instagram.com/brnclrst/",
    },
    {
        name: IconNames.linkedin,
        url: "https://www.linkedin.com/in/bernice-claresta-837415212/",
    },
    // {
    //     name: IconNames.twitter,
    //     url: "https://www.facebook.com/your_facebook_username/",
    // },
]