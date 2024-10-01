import { Icons } from '@ui/components/icons'
import { IconNames } from '@ui/components/icons/interface';
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer';

interface IServiceType {
    icon: IconNames;
    label: string;
    description?: string;
}

interface IServiceTypeHomeSection {
    serviceTypes: IServiceType[]
}

export const ServiceTypeHomeSection = ({
    serviceTypes
}: IServiceTypeHomeSection) => {
    const { ref: serviceTypeRef, inView: serviceTypeInView } = useInView({ threshold: 0.3 });
    return (
        <motion.div
            ref={serviceTypeRef}
            className='container mx-auto flex flex-col gap-16 md:gap-32 justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: serviceTypeInView ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="font-bold text-2xl md:text-4xl text-center">
                {`Kind of Services`}
            </h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 justify-items-center'>
                {serviceTypes.map((item, i) => (
                    <div key={i} className='flex flex-col gap-8 items-center justify-center text-center max-w-sm rounded-sm shadow bg-slate-50 p-3'>
                        <Icons name={item.icon} size={24} className='mt-8' />
                        <div className='flex flex-col gap-4'>
                            <h2 className='font-semibold text-2xl'>{item.label}</h2>
                            <p>{item.description}​</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
