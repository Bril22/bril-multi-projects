import { StaticImageData } from "next/image"

import OffersImage from '@public/langui-villa/bathroom.png'
import OffersImage2 from '@public/langui-villa/bedroom.png'
import OffersImage3 from '@public/langui-villa/comunal-area-bb.png'
import { IconNames } from "@ui/components/icons/interface"

import Langui6 from '@public/langui-villa/living-room.png'
import UmahKoe5 from '@public/umahkoe/living-room-2.png';
import Ubud2 from '@public/ubud-villa/bedroom-2.png';
import DayCare2 from '@public/daycare/indoor-play-2.png';

export const gallery: StaticImageData[] = [
    OffersImage2,
    OffersImage,
    OffersImage3
]

export const serviceTypes = [
    {
        icon: IconNames.features,
        label: 'Residential Interior Design',
        description: 'We specialize in creating beautiful and functional living spaces for homes, including villas, apartments, and houses. Our designs reflect the unique personality and lifestyle of each client.'
    },
    {
        icon: IconNames.features,
        label: 'Commercial Interior Design',
        description: 'Our team offers expert interior design services for commercial spaces such as offices, retail stores, and restaurants. We focus on creating environments that enhance productivity and customer experience.'
    },
    {
        icon: IconNames.features,
        label: 'Space Planning',
        description: 'We provide comprehensive space planning services to optimize the layout and functionality of your space. Our goal is to create efficient and aesthetically pleasing environments tailored to your needs.'
    },
    {
        icon: IconNames.features,
        label: 'Renovation and Remodeling',
        description: 'Our renovation services transform outdated spaces into modern, stylish environments. We work closely with clients to ensure their vision is realized while maintaining functionality and comfort.'
    },
    {
        icon: IconNames.features,
        label: 'Custom Furniture Design',
        description: 'We offer custom furniture design services to create unique pieces that fit perfectly within your space. Our designs combine style and functionality, ensuring that each piece meets your specific requirements.'
    },
    {
        icon: IconNames.features,
        label: 'Color Consultation',
        description: 'Our color consultation services help clients choose the perfect color palettes for their spaces. We consider lighting, furnishings, and personal preferences to create harmonious and inviting environments.'
    }
];

export const bestCollections = [
    {
        img: Langui6,
        label: 'Langui Villa',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        img: UmahKoe5,
        label: 'Umah Koe Yogya',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        img: Ubud2,
        label: 'Ubud Villa',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        img: DayCare2,
        label: 'Day Care',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
]