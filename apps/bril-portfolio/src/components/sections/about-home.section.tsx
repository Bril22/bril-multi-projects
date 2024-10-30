import React from 'react'

export const AboutHomeSection = () => {
    return (
        <div className='h-[500px] md:h-[700px] px-4 text-center w-full bg-[#373535cb] rounded-lg '>
            <div className='container mx-auto max-w-4xl flex flex-col gap-8 items-center justify-start h-full py-16 md:py-32'>
                <h2 className='text-2xl md:text-4xl font-semibold text-[#85adaf]'>{`Hi, I'm Bril. Nice to meet you!`}</h2>
                <p className='text-sm md:text-lg'>
                    {/* {`Software Engineer with a Bachelor's degree in Geophysical Engineering from `}
                    <span className='italic'>{`Bandung Institute of Technology. `}</span> */}
                    {`Over the years, I have gained extensive experience in developing software solutions for various industries, including marketing, finance, and e-commerce. My skills include working with modern frameworks like Next.js and Nest.js, automating testing processes, and building robust APIs`}
                </p>
            </div>
        </div>
    )
}
