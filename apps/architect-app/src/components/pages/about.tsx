"use client"

import { gallery, serviceTypes, bestCollections } from '@/constants/home'
import DayCare from '@public/daycare/indoor-play-2.png'
import { BannerHeroHomeSection, BestCollectionHomeSection, GalleryHomeSection, ServiceHomeSection, ServiceTypeHomeSection } from '@/components/sections/home'
import { allGallery } from '@/constants/portfolio'


export const AboutPage = () => {
    return (
        <div className='flex flex-col gap-16 md:gap-32'>
            {/* banner */}
            <BannerHeroHomeSection />
            {/* service offer */}
            <ServiceHomeSection src={DayCare} />
            {/* gallery */}
            <GalleryHomeSection gallery={allGallery} />
            {/* service type */}
            <ServiceTypeHomeSection serviceTypes={serviceTypes} />
            {/* Best Collection */}
            <BestCollectionHomeSection bestCollections={bestCollections} />
        </div>
    )
}