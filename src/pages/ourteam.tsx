import React from 'react'
import {atharvaLende,tarunRathod,Kriti,wafiya, omkar} from '../images/team'

import Image from 'next/image'
import { instagram, linkedin, github } from '../images/icons';
import NavMenu from '@/components/NavMenu';
import { useRouter } from 'next/router';


const teamDetails = [
    {
        name: 'Atharva Lende',
        image: atharvaLende,
        year: "3rd year CSE",
        linkedin: 'https://www.linkedin.com/in/atharva-lende/',
        github: 'https://github.com/Atharva1213',
        instagram: 'https://www.instagram.com/_shreelende_/',
    },
    {
        name: 'Tarun Rathod',
        image: tarunRathod,
        year: "3rd year CSE",
        linkedin: 'https://www.linkedin.com/in/atharva-lende/',
        github: 'https://github.com/Atharva1213',
        instagram: 'https://www.instagram.com/_shreelende_/',
    },
    {
        name: 'Wafiya Mulla',
        image: wafiya,
        year: "3rd year CSE",
        linkedin: 'https://www.linkedin.com/in/atharva-lende/',
        github: 'https://github.com/Atharva1213',
        instagram: 'https://www.instagram.com/_shreelende_/',
    },
    {
        name: 'Kriti Verma',
        image: Kriti,
        year: "3rd year CSE",
        linkedin: 'https://www.linkedin.com/in/atharva-lende/',
        github: 'https://github.com/Atharva1213',
        instagram: 'https://www.instagram.com/_shreelende_/',
    },
    {
        name: 'Omkar Kulkarni',
        image: omkar,
        year: "3rd year CSE",
        linkedin: 'https://www.linkedin.com/in/omkarkulkarni7/',
        github: 'https://github.com/Omkarkulkarni7',
        instagram: 'https://www.instagram.com/omkarcoolkarni7',
    },
]
const Ourteam = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <>
            {showNav && (
                <NavMenu />
            )}
            <div className="flex justify-center">
                <div className="   md:px-12 xl:px-6"> 
                    <div className="relative pt-6">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">OUR <span className="text-primary text-[#EACD69]">TEAM.</span></h1>

                    </div>
                </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 m-10  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-10">
                        {teamDetails.map((item) => (
                            <div className="w-[300px] px-6 py-6  text-center bg-slate-200 rounded-lg lg:mt-0 xl:px-10">
                                <div className="space-y-4 xl:space-y-6 ">
                                    <Image className="mx-auto rounded-full h-36 w-36" src={item.image} alt="author avatar" />
                                    <div className="space-y-2">
                                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                                            <h1 className="text-black font-bold">{item.name}</h1>
                                            <p className='text-black'>{item.year}</p>
                                            <div className="flex justify-center mt-5 space-x-5">
                                                <a href={item.instagram} target="_blank" rel="noopener noreferrer" className="inline-block text-white">
                                                    <span className="sr-only">Instagram</span>
                                                    <Image src={instagram} alt="twitter" />
                                                </a>
                                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400">
                                                    <span className="sr-only">GitHub</span>
                                                    <Image src={github} alt="github" />
                                                </a>
                                                <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <Image src={linkedin} alt="linkedin" width="20" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>


    )
}

export default Ourteam