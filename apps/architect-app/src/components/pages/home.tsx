"use client"

import Image from "next/image"
import ProfileImage from "@public/daycare/bedroom.png"
import SmallProfile from "@public/profile.jpeg"
import Link from "next/link"
import { IconNames } from "@ui/components/icons/interface"
import { Icons } from "@ui/components/icons"


export const HomePage = () => {
    return (
        <div id="home" className='flex flex-col gap-16 md:gap-32 p-20'>
            {/* Introduction */}
            <div className="container mx-auto flex md:flex-row flex-col gap-8 justify-around items-center pt-16 md:pt-32">
                <div className="flex flex-col gap-6 w-full">
                    <h2 className="text-2xl font-bold">
                        Welcome to My Studio
                    </h2>
                    <h2 className="text-4xl font-bold">
                        I am Bernice Claresta Sukatendel
                    </h2>
                    <p className="max-w-2xl">
                        Creative, ambitious, and hardworking person who had great interest in Architecture, Art, and Design. Besides that, also want to develop the knowledge that i have got and the skills i have. I am very open to new experiences, very motivated to constantly develop myself and grow professionally which is certainly useful for my future in the world of work.
                    </p>
                    <Link href={''} className="btn btn-primary w-28">Explore</Link>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="border border-b rounded-2xl p-4 w-fit flex flex-col justify-center items-center gap-4">
                        <Image src={ProfileImage} alt="profile-image" height={400} width={450} className="object-cover w-full h-56 md:w-96 md:h-96 rounded-2xl" />
                        <div className="flex justify-between w-full items-center">
                            <div className="flex gap-4">
                                <Image src={SmallProfile} height={200} width={200} alt="my-profile" className="w-14 h-14 rounded-full object-cover" />
                                <div className="flex flex-col justify-center">
                                    <p className="font-semibold">Bernice</p>
                                    <p>Interior Designer</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <Icons name={IconNames.love} size={20} className="text-red-100" />
                                <p>210324</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:gap-16">
                <h2 className="md:text-6xl text-3xl font-semibold w-full text-center">{`What I have done`}</h2>
            </div>
        </div>
    )
}