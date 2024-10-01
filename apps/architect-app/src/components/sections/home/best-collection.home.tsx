import { DefaultButton } from '@ui/components/button'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer';

interface IBestCollection {
    img: string | StaticImageData;
    label: string;
    description: string;
}

interface IBestCollectionHomeSection {
    bestCollections: IBestCollection[]
}

export const BestCollectionHomeSection = ({
    bestCollections
}: IBestCollectionHomeSection) => {
    const { ref: collectionRef, inView: collectionInView } = useInView({ threshold: 0.3 });
    return (
        <motion.div
            ref={collectionRef}
            className="container md:mx-auto flex flex-col gap-16 md:gap-32 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: collectionInView ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="font-bold text-2xl md:text-4xl text-center">
                {`Best Collections`}
            </h2>
            <div className='flex flex-col md:gap-16 gap-8'>
                <div className='flex flex-col md:flex-row w-full justify-between gap-4'>
                    <p className='max-w-xl'>
                        {`Morbi lobortis morbi dignissim sodales eget mauris turpis interdum sagittis sed cursus nunc nulla congue quis.`}
                    </p>
                    <DefaultButton label='View all projects' onclick={() => { }} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {bestCollections?.map((item, i) => (
                        <div key={i} className='flex flex-col md:gap-4 gap-2 relative h-96'>
                            <Image
                                src={item.img}
                                alt=''
                                width={500}
                                height={500}
                                // fill
                                className='w-auto object-cover object-center h-full'
                            />
                            <motion.div
                                className='absolute inset-0 flex flex-col justify-center items-center bg-white opacity-0 hover:opacity-80 transition-opacity duration-300'
                                initial={{ y: 20, opacity: 0 }}
                                whileHover={{ y: 0, opacity: 0.8 }}
                            >
                                {/* <h2 className='text-center'>{item.label}</h2> */}
                                <p className='text-center max-w-60'>{item.description}</p>
                            </motion.div>
                            <h2 className='text-center'>{item.label}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
