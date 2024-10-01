import { GaleryCarousel } from '@ui/components/carousel/galery-carousel';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import React from 'react'
import { useInView } from 'react-intersection-observer';

interface IGalleryHomeSection {
    gallery: StaticImageData[]
}

export const GalleryHomeSection = ({
    gallery
}: IGalleryHomeSection) => {
    const { ref: galleryRef, inView: galleryInView } = useInView({ threshold: 0.3 });

    return (
        <motion.div
            ref={galleryRef}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: galleryInView ? 0 : 50, opacity: galleryInView ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <GaleryCarousel
                title='Portfolio Collections'
                style='flex flex-col md:gap-32 gap-16'
                images={gallery.map((images) => {
                    return images?.src;
                })}
            // facility={[{
            //     title: 'Title of the Project',
            //     bodyDesc: 'Description of the project',
            //     headerDesc: 'Description of the project',
            //     icon: OffersImage2,
            // }]}
            />
        </motion.div>
    )
}
