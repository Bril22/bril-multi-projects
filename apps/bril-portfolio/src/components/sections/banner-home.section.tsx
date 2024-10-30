import { DefaultButton } from '@ui/components/button'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'

export const BannerHeroHomeSection = () => {
    const { ref: bannerRef, inView: bannerInView } = useInView({ threshold: 0.1 });
    const router = useRouter();
    return (
        <motion.div
            ref={bannerRef}
            className="relative h-[900px] bg-cover bg-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: bannerInView ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute inset-0"></div>
            <div className="relative bottom-20 w-full h-full flex flex-col gap-4 justify-center items-center text-white z-10 text-center">
                <h2 className="font-bold text-2xl md:text-4xl text-[#85adaf]">
                    {`Software Engineer`}
                </h2>
                <div className='flex flex-col gap-2 md:text-md text-xs  md:max-w-2xl max-w-xs'>
                    <p className="tracking-widest">
                        {`with expertise in Frontend Development, API Design, and Automation. `}
                    </p>
                    {/* <p className='font-semibold'>{`~Bernice Claresta Sukatendel`}</p> */}
                </div>
                <Image src={'/home/my-avatar.png'} alt="avatar" width={400} height={400} className='md:w-56 w-44 rounded-full object-cover' />

                {/* <DefaultButton
                    label='See My Projects'
                    onclick={() => router.push('/portfolio')}
                    color='white'
                /> */}
            </div>
            <div className='flex justify-center w-full'>
                <Image src={'/home/icon-banner.png'} alt="icon" width={600} height={600} className='absolute -bottom-5 md:-bottom-10 object-cover opacity-90' />
            </div>


        </motion.div>
    )
}
