import { DefaultButton } from '@ui/components/button'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useInView } from 'react-intersection-observer';

export const BannerHeroHomeSection = () => {
    const { ref: bannerRef, inView: bannerInView } = useInView({ threshold: 0.1 });
    const router = useRouter();
    return (
        <motion.div
            ref={bannerRef}
            className="relative bg-[url('/bed-langui.png')] h-[500px] md:h-[700px] bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: bannerInView ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative w-full h-full flex flex-col gap-4 justify-center items-center text-white z-10 text-center">
                <h2 className="font-bold text-4xl">
                    {`Hi, I'm an Interior Designer`}
                </h2>
                <div className='flex flex-col gap-2 md:text-md text-xs  md:max-w-2xl max-w-xs'>
                    <p className="tracking-widest">
                        {`Discover personalized interior design solutions for every room in your home. Create spaces that inspire, comfort, and reflect your unique taste.`}
                    </p>
                    <p className='font-semibold'>{`~Bernice Claresta Sukatendel`}</p>
                </div>

                <DefaultButton
                    label='See My Projects'
                    onclick={() => router.push('/portfolio')}
                    color='white'
                />
            </div>
        </motion.div>
    )
}
