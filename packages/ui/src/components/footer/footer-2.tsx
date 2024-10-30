import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Icons } from '../icons';
import { IFooter } from './interface';

export const Footer2Component = ({
    img,
    title,
    description,
    footerList,
    socialMedia,
    copyright,
}: IFooter) => {
    return (
        <div className='bg-gray-200 w-full md:mt-32 mt-16'>
            <div className='container mx-auto pb-32 pt-44 px-4'>
                <div className='grid grid-cols-1 gap-4 text-center justify-items-center'>
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
                            <p className='text-lg max-w-xl italic'>
                                {description}
                            </p>
                        )}
                    </div>
                    {/* {footerList?.map((footerList, index) => (
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
                    ))} */}
                    {socialMedia && (
                        <div className='flex gap-2'>
                            {socialMedia?.map((item, i) => (
                                <Link href={item.url!} key={i} className='flex gap-2 max-w-44'>
                                    <Icons name={item.name} size={26} className='text-black' />
                                </Link>
                            ))}
                        </div>
                    )}
                    {copyright && (
                        <p className='text-start md:text-center text-xs text-gray-400'>
                            Handcrafted by me &copy;{` ${copyright}`}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
