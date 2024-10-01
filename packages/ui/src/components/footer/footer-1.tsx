import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IconNames } from '../icons/interface';
import { Icons } from '../icons';

export type Icon = {
    name: IconNames;
    url?: string;
}

export type Content = {
    title: string;
    link?: string;
    icon?: IconNames;
};
export type FooterList = {
    title: string;
    content: Content[];
}[];

interface IFooter {
    img?: string | StaticImageData;
    title?: string;
    description?: string;
    footerList?: FooterList[];
    socialMedia?: Icon[];
    copyright?: string;
}

export const Footer1Component = ({
    img,
    title,
    description,
    footerList,
    socialMedia,
    copyright,
}: IFooter) => {
    return (
        <div className='bg-based-primary/20 w-full md:mt-32 mt-16'>
            <div className='container mx-auto py-8 px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-4 justify-start text-info-content'>
                        {img && (
                            <Image src={img} alt='logo' className='w-52' height={300} width={300} />
                        )}
                        {title && (
                            <h1 className='text-3xl font-bold'>
                                {title}
                            </h1>
                        )}
                        {description && (
                            <p className='text-sm'>
                                {description}
                            </p>
                        )}
                    </div>
                    {footerList?.map((footerList, index) => (
                        <div key={index} className="w-full space-y-2 flex md:justify-center">
                            {footerList.map((item, idx) => (
                                <div key={idx}>
                                    <p className="font-semibold">{item.title}</p>
                                    <div className="mt-2 flex flex-col gap-y-1">
                                        {item.content.map((content, id) =>
                                            content.link ? (
                                                <Link
                                                    key={id}
                                                    href={content.link}
                                                    className="hover:underline text-sm w-fit flex gap-2"
                                                >
                                                    {content.icon && (
                                                        <Icons
                                                            name={content.icon!}
                                                            size={20}
                                                        />
                                                    )}
                                                    {content.title}
                                                </Link>
                                            ) : (
                                                <p key={id} className="text-sm">
                                                    {content.title}
                                                </p>
                                            )

                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    {socialMedia && (
                        <div className='flex gap-2'>
                            {socialMedia?.map((item, i) => (
                                <Link href={item.url!} key={i} className='flex gap-2 max-w-44'>
                                    <Icons name={item.name} size={26} />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                {copyright && (
                    <div className='w-full flex justify-between pt-6'>
                        <p className='text-start md:text-center text-xs text-gray-400'>
                            &copy;{` ${copyright}`}
                        </p>
                        <p className='text-end md:text-center text-xs text-info-content italic'>
                            Powered By <span className='font-semibold'>BrilianNatanael</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
