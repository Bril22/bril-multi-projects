'use client'

import { portfolioContent } from "@/constants/portfolio";
import { DefaultButton } from "@ui/components/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ContentPortfolio } from "../sections/portfolio";

export const PortfolioComponent = () => {
    const { ref: bannerRef, inView: bannerInView } = useInView({ threshold: 0.1 });
    const { ref: portRef, inView: portInView } = useInView({ threshold: 0.3 });

    return (
        <div className='flex flex-col gap-16 md:gap-32'>
            {/* Banner */}
            <motion.div
                ref={bannerRef}
                className="relative bg-[url('/langui-villa/kitchen.png')] h-[500px] md:h-[700px] bg-cover bg-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: bannerInView ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative w-full h-full flex flex-col gap-4 justify-center items-center text-white z-10 text-center">
                    <h2 className="font-bold text-2xl md:text-7xl">
                        {`My Projects`}
                    </h2>
                    <div className='flex flex-col gap-2 md:text-md text-xs md:max-w-2xl max-w-xs'>
                        <p className="tracking-widest">
                            {`Explore my portfolio showcasing a variety of interior design projects that highlight creativity, functionality, and style. Each project reflects my commitment to creating spaces that are not only beautiful but also tailored to meet the unique needs of my clients.`}
                        </p>
                        {/* <p className='font-semibold'>{`~Bernice Claresta Sukatendel`}</p> */}
                    </div>

                    {/* <DefaultButton
                    label='See My Projects'
                    onclick={() => { }}
                    color='white'
                /> */}
                </div>
            </motion.div>

            {/* Portfolio */}
            {portfolioContent.map((item, i) => {
                return (
                    <ContentPortfolio key={i} data={item} />
                )
                // const { ref: itemRef, inView: itemInView } = useInView({ threshold: 0.3 });

                // return (
                //     <motion.div
                //         key={i}
                //         ref={itemRef}
                //         className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-2 px-4"
                //         initial={{ opacity: 0 }}
                //         animate={{ opacity: itemInView ? 1 : 0 }}
                //         transition={{ duration: 1 }}
                //     >
                //         <div className="flex flex-col gap-6 items-start justify-center w-full p-6">
                //             <h2 className="text-2xl font-bold uppercase">{item.title}</h2>
                //             <p className="text-xs">{item.description}</p>
                //         </div>
                //         {item.images.map((image, j) => (
                //             <Image key={j} src={image.src} alt={item.title} width={400} height={300} className="w-full h-72 object-cover" />
                //         ))}
                //     </motion.div>
                // );

            })}
        </div>
    )
}