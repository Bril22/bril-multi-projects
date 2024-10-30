"use client"
import React from 'react'
import { BannerHeroHomeSection } from '../sections/banner-home.section'
import { AboutHomeSection } from '../sections/about-home.section'
import { SkillsSection } from '../sections'
import Image from 'next/image'
import { desc } from 'framer-motion/client'
import { DefaultButton } from '@ui/components/button'
import { useRouter } from 'next/navigation'

const recentWork = [
    {
        src: '/portfolio/sqm-dashboard.png',
        title: 'Market Place Dashboard',
        description: 'NextJs, NestJs, Prisma',
    },
    {
        src: '/portfolio/gp-website.png',
        title: 'Home Page',
        description: 'NextJs, NodeJs, Mongoose',
    },
    {
        src: '/portfolio/disbun-jabar.png',
        title: 'Government Dashboard',
        description: 'NextJs',
    },
    {
        src: '/portfolio/bapenda-jabar-2.png',
        title: 'Point Distribution Map',
        description: 'NextJs',
    }
]

export const HomePage = () => {
    const router = useRouter();
    return (
        <div className='flex flex-col'>
            <BannerHeroHomeSection />
            <div className='relative flex flex-col gap-16 md:gap-32'>
                <div className='relative flex'>
                    <AboutHomeSection />
                    <div className='md:absolute md:block hidden -bottom-3/4 md:-bottom-1/3 w-full'>
                        <SkillsSection />
                    </div>
                </div>
                <div className='md:hidden block w-full'>
                    <SkillsSection />
                </div>
                <div className='md:h-[150px]' />
                <div className='flex flex-col gap-16 justify-center items-center text-center'>
                    <div className='flex flex-col gap-8'>
                        <h2 className='text-2xl md:text-4xl font-semibold text-[#85adaf]'>{`My Recent Work`}</h2>
                        <p className='text-sm md:text-lg'>
                            {`Here are a few past design projects I've worked on`}
                        </p>
                    </div>
                    {recentWork.length > 0 && (
                        <div className='flex md:flex-row flex-col gap-8'>
                            {recentWork?.map((item, i) => (
                                <div key={i} className='flex flex-col gap-4 bg-gray-300 text-black p-2 rounded-lg hover:scale-110'>
                                    <Image src={item.src} alt='test' width={400} height={400} className='h-44 w-full md:w-72 object-cover' />
                                    <div className='flex flex-col gap-2 items-start px-2    '>
                                        <h2 className='font-semibold text-lg'>{item.title}</h2>
                                        <p className='text-sm'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='relative w-full flex justify-center'>
                    <div className='md:absolute md:top-20 flex flex-col gap-4 items-center justify-center relative -bottom-40'>
                        <div className='bg-gray-300 flex flex-col gap-4 p-6 text-center items-center text-black max-w-4xl w-full rounded-lg'>
                            <h2 className='text-2xl font-semibold '>{`Interested in collaborating with me?`}</h2>
                            <p>{`I’m always open to discussing product design work or partnership opportunities.`}</p>
                            <div className='pt-6'>
                                <DefaultButton
                                    label={`Download CV`}
                                    onclick={() => window.open('/cv/my-cv.pdf', '_blank')}
                                    className='bg-[#bbc4c2] w-fit text-xl !rounded-full'
                                    color='[#0c6166]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
