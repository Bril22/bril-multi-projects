import { Icons } from '@ui/components/icons'
import { IconNames } from '@ui/components/icons/interface'
import React from 'react'

const skills = [
    {
        icon: IconNames.code,
        title: 'Frontend Development',
        description: 'I enjoy turning ideas into interactive and visually appealing websites.',
        skills: [
            "HTML",
            "CSS",
            "NextJs",
            "TailwindCSS",
            "Javascript/Typescript",
        ]
    },
    {
        icon: IconNames.code,
        title: 'Backend Development',
        description: 'I build the core systems that make applications run smoothly and handle data securely.',
        skills: [
            "NestJS",
            "Prisma",
            "Node.js"
        ]
    },
    {
        icon: IconNames.code,
        title: 'QA Automation',
        description: 'I streamline testing processes to ensure everything works efficiently and without errors.',
        skills: [
            "JMeter",
            "Cypress",
            "Postman",
            "Selenium"
        ]
    },
    {
        icon: IconNames.code,
        title: 'Cloud Development',
        description: 'I use cloud services to make sure apps can scale easily and stay available anytime.',
        skills: ["AWS (ECS, Fargate)"]
    }
]
export const SkillsSection = () => {
    return (
        <div className='flex justify-center md:h-[500px] w-full'>
            <div className='container mx-auto w-full rounded-lg bg-gray-300 grid grid-cols-1 md:grid-cols-4 text-center text-black'>
                {skills?.map((item, i) => (
                    <div key={i} className={`${i < skills.length - 1 ? 'border-r-2 border-[#373535cb]' : ''} py-6 flex flex-col gap-8 items-center`}>
                        <div className='flex items-center justify-center'>
                            <Icons name={item.icon} size={40} className='bg-[#373535cb] text-white rounded-full p-4 w-16 h-16' />
                        </div>
                        <h2 className='text-xl font-semibold text-[#373535cb]'>
                            {item.title}
                        </h2>
                        <p className='max-w-xs text-center w-full'>
                            {item.description}
                        </p>
                        <div className='flex flex-col justify-start gap-4 bg-[#bbc4c2] px w-full min-h-48 py-2'>
                            <p className='text-[#0c6166] font-semibold'>Skills:</p>
                            <ul className=''>
                                {item.skills.map((sk, i) => (
                                    <li key={i}>{sk}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
