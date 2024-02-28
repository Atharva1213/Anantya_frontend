import React from 'react'
import eventposter from "../images/poster/eventposter.jpeg";
import Image from 'next/image';

const Pronities = () => {
    return (
        <section >
            <div className="   md:px-12 xl:px-6">
                <div className="relative pt-36 ">
                    <div className="lg:w-2/3 text-center  mx-auto">
                        <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">Top<span className="text-primary text-[#EACD69]">-</span>Events<span className="text-primary text-[#EACD69]">.</span></h1>

                    </div>
                </div>
            </div>
            <div className="flex justify-center p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
                    <div className='bg-white p-3  rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto max-w-full rounded-lg" src={eventposter} alt="" />
                    </div>
                    <div className='bg-white p-3  rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto  max-w-full rounded-lg" src={eventposter} alt="" />
                    </div>
                    <div className='bg-white p-4  rounded-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
                        <Image className="h-auto w max-w-full rounded-lg" src={eventposter} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pronities