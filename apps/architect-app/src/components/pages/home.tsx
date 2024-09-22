"use client"
import { DefaultButton } from '@ui/components/button'
import Image, { StaticImageData } from 'next/image'
import { GaleryCarousel } from '@ui/components/carousel/galery-carousel'

import OffersImage from './image/offers-img.jpeg'
import OffersImage2 from './image/offers-img-2.jpeg'
import OffersImage3 from './image/offers-img-3.jpeg'
import { Icons } from '@ui/components/icons'
import { IconNames } from '@ui/components/icons/interface'

const gallery: StaticImageData[] = [
    OffersImage2,
    OffersImage,
    OffersImage3
]

const serviceTypes = [
    {
        icon: IconNames.calendar,
        label: 'Home Decoration',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        icon: IconNames.calendar,
        label: 'Home Decoration',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        icon: IconNames.calendar,
        label: 'Home Decoration',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        icon: IconNames.calendar,
        label: 'Home Decoration',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        icon: IconNames.calendar,
        label: 'Home Decoration',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    },
    {
        icon: IconNames.calendar,
        label: 'Home Decoration',
        description: 'We offer a wide range of home decoration options, including walls, flooring, and furniture. Our team is experienced in creating custom designs that cater to your specific needs.'
    }
]

export const HomePage = () => {
    return (
        <div className='flex flex-col gap-16 md:gap-32'>
            <div className="relative bg-[url('/hero-bg.jpg')] h-[500px] md:h-[700px] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative w-full h-full flex flex-col gap-4 justify-center items-center text-white z-10 text-center">
                    <h2 className="font-bold text-4xl">
                        {`Hi, I'm a Interior Designer`}
                    </h2>
                    <div className='flex flex-col gap-2 md:text-md text-xs  md:max-w-2xl max-w-xs'>
                        <p className="tracking-widest">
                            {`Discover personalized interior design solutions for every room in your home. Create spaces that inspire, comfort, and reflect your unique taste.`}
                        </p>
                        <p className='font-semibold'>{`~Bernice Claresta Sukatendel`}</p>
                    </div>

                    <DefaultButton
                        label='See My Projects'
                        onclick={() => { }}
                        color='white'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-16 md:gap-32 justify-center'>
                <h2 className="font-bold text-2xl md:text-4xl text-center">
                    {`Services We Offer`}
                </h2>
                <div className='flex md:flex-row flex-col items-center justify-center gap-12'>
                    <Image src={OffersImage} alt='img-service' width={500} height={500} className='h-[450px] object-cover' />
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-semibold'>
                            {`Title Service you offers`}
                        </h2>
                        <p>
                            {`Description of the service you offer`}
                        </p>
                        <div className='w-fit'>
                            <DefaultButton
                                label='Know More'
                                onclick={() => { }}
                                color='black'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <GaleryCarousel
                title='Portfolio Collections'
                style='flex flex-col md:gap-32 gap-16'
                images={gallery.map((images) => {
                    return images?.src;
                })}
                facility={[{
                    title: 'Title of the Project',
                    bodyDesc: 'Description of the project',
                    headerDesc: 'Description of the project',
                    icon: OffersImage2,
                }]}
            />
            <div className='container mx-auto flex flex-col gap-16 md:gap-32 justify-center'>
                <h2 className="font-bold text-2xl md:text-4xl text-center">
                    {`Kind of Services`}
                </h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 justify-items-center'>
                    {serviceTypes.map((item, i) => (
                        <div key={i} className='flex flex-col gap-8 items-center justify-center text-center max-w-sm rounded-sm shadow bg-slate-50 p-3'>
                            <Icons name={item.icon} size={24} className='mt-8' />
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-semibold text-2xl'>{item.label}</h2>
                                <p>{item.description}​</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}