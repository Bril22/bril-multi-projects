import { DefaultButton } from '@ui/components/button'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

interface IServiceHomeSection {
    src: string | StaticImageData
}

export const ServiceHomeSection = ({
    src
}: IServiceHomeSection) => {
    const { ref: serviceRef, inView: serviceInView } = useInView({ threshold: 0.3 });
    return (
        <motion.div
            ref={serviceRef}
            className='flex flex-col gap-16 md:gap-32 justify-center'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: serviceInView ? 0 : 50, opacity: serviceInView ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="font-bold text-2xl md:text-4xl text-center">
                {`Services I Offer`}
            </h2>
            <div className='flex md:flex-row flex-col items-center justify-center gap-12'>
                <Image src={src} alt='img-service' width={500} height={500} className='h-[450px] object-cover' />
                <div className='flex flex-col gap-4 max-w-2xl md:px-0 px-4 text-center md:text-start'>
                    <h2 className='text-2xl font-semibold'>
                        {`Interior Design Services`}
                    </h2>
                    <p>
                        {`I offer comprehensive interior design services for various models, including villas, houses, apartments, and more. My approach focuses on creating functional and aesthetically pleasing spaces that reflect the unique style and needs of each client.`}
                    </p>
                    <div className='w-full flex items-center justify-center md:justify-start'>
                        <DefaultButton
                            label='Know More'
                            onclick={() => { }}
                            color='black'
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
