import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'

interface IContentPortfolio {
    data: {
        title: string,
        description: string,
        images: StaticImageData[]
    }
}

export const ContentPortfolio = ({
    data,
}: IContentPortfolio) => {
    const { ref: itemRef, inView: itemInView } = useInView({ threshold: 0.2 });

    return (
        <motion.div
            ref={itemRef}
            className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-2 px-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: itemInView ? 1 : 0, x: itemInView ? 0 : -100 }}            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-6 items-start justify-center w-full p-6">
                <h2 className="text-2xl font-bold uppercase">{data.title}</h2>
                <p className="text-xs">{data.description}</p>
            </div>
            {data.images.map((image, j) => (
                <Image key={j} src={image.src} alt={data.title} width={400} height={300} className="w-full h-72 object-cover" />
            ))}
        </motion.div>
    );
}
