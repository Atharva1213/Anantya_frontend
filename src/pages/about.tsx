import React from 'react'
import { image4, image15, image10 } from '../images/gallery'
import Image from 'next/image'
import yit from '../images/yit.jpg';
import { useRouter } from 'next/router';
import NavMenu from '@/components/NavMenu';


const About = () => {
    const router = useRouter();
    const showNav = router.query.showNav;
    return (
        <div>
            {showNav && <NavMenu />}
            <div className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-white">
                <div className="container mx-auto">
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative  ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]"> Us.</span></h1>

                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">

                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                {/* <div className="w-full px-3 sm:px-4 xl:w-1/2"> */}
                                <div className="relative  z-10 my-4 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter ">
                                    <Image
                                        src={yit}
                                        alt=""

                                        className=" h-[350px] rounded-2xl "
                                    />
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">

                                <p className="text-body-color text-justify mb-8 text-base">
                                    Yenepoya Institute of Technology was established in 2008 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering Technology and Management. The Institute made remarkable progress since it's inception in every aspect and gained name among the Institutes of Technology in the state of Karnataka due to the quality of education and training provided by its dedicated faculty and the infrastructure available. This renowned Institute is now owned by the Islamic Academy of Education of Yenepoya Group of Institutions and Yenepoya University An organization well known for Quality Education.                            </p>

                            </div>
                        </div>
                    </div>
                    <div className="   md:px-12 xl:px-6">
                        <div className="relative pt-36 ">
                            <div className="lg:w-2/3 md:text-center  mx-auto">
                                <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">About<span className="text-primary text-[#EACD69]"> Yensplash.</span></h1>

                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 mt-10 flex flex-wrap items-center justify-between">
                        <div className="w-full lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">


                                <p className="text-body-color mb-8 text-justify text-base">
                                    Yensplash is an annual techno-cultural fest held at Yenepoya Institute of Technology in Mangalore, Karnataka, India. It is a 3-day attracts participants from various colleges across the region. The fest features a wide range of events, including technical competitions, cultural performances, workshops, seminars, and sports activities. The technical competitions include coding challenges, hackathons, robotics competitions, and gaming events. There are also cultural events such as music and dance performances, fashion, and talent shows. Yensplash is known for its lively and energetic atmosphere, with participants from different colleges showcasing their talents and engaging in friendly competition. The fest provides a platform for students to showcase their skills and creativity and helps to foster a sense of community and collaboration among participants.                                </p>

                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={image15}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <Image
                                            src={image4}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <Image
                                            src={image10}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About