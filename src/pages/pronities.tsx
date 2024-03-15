import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";
interface CardData {
  id: number;
  img:string;
  title: string;
  desc: string;
  alias:string;
}

const CardsData: CardData[] = [
  {
    id: 3,
    img:"https://res.cloudinary.com/drpj8yeqp/image/upload/v1710488019/posters/alphabyteposter_a5ly4z.webp",
    title: "Alpha Byte",
    alias: "AlphaByte",
    desc: "AlphaByte 1.0 is a National Level Hackathon organized by GDSC x Anantya 2024, in collaboration with the Computer Engineering Students Association (CESA). It is a flagship event of Anantya 2024, aimed at bringing together the brightest minds in the field of technology from across the country.",
  },
  {
    id: 1,
    img:"https://res.cloudinary.com/drpj8yeqp/image/upload/v1710489888/posters/1_CODIGO_1_ssickh.webp",
    title: "Codigo",
    alias: "Codigo",
    desc: "Get ready for the ultimate coding extravaganza with CODIGO! Dive into a world of innovation, challenge, and excitement as you compete against the best and brightest. With twists and surprises around every corner, CODIGO promises an exhilarating journey for all skill levels. Join us for a chance to showcase your coding prowess, make new friends, and experience the thrill of victory. Register today and prepare to embark on an unforgettable coding adventure!",
  },
  {
    id: 2,
    img:"https://res.cloudinary.com/drpj8yeqp/image/upload/v1710487324/posters/4_IPL_AUCTION_jip0uo.webp",
    title: "IPL Auction",
    alias: "IPL Auction",
    desc: "The IPL Auction Simulation invites participants to engage in a strategic team-building experience mirroring the official IPL auction process.1: Qualifying Test - Demonstrate your cricket acumen through a comprehensive knowledge assessment.2: Buzzer Round - Employ quick thinking and strategic bidding in a fast-paced auction environment.3: Live Auction - Participate in a simulated live auction, utilizing a set budget to construct your ideal IPL franchise. This event is designed to test knowledge, decision-making, and auction room prowess.",
  }
];

interface Props {
  isMobile: boolean; 
}

const Pronities: React.FC<Props> = ({ isMobile }) => {
  return (
    <section>
      <div className="md:px-12 xl:px-6">
        <div className="relative pt-6">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">
              Top<span className="text-primary text-[#EACD69]">-</span>Events
              <span className="text-primary text-[#EACD69]">.</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <div className="w-[95%] grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
          {CardsData.map(({ id, img, title, desc,alias}) => {
            return (
              <div key={id} className="bg-slate-100 p-3 rounded-3xl m-4">
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    className="rounded-lg"
                    src={img}
                    width={100}
                    height={400}
                    alt=""
                  />
                  <div className="absolute left-0 top-[-100%] text-white opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-200">
                    <div className="space-y-4">
                      <Slide cascade duration={200}>
                        <h1 className="text-3xl font-bold">{title}</h1>
                         {!isMobile &&<Fade cascade damping={0.05} duration={200}>
                          <p>{desc}</p>
                        </Fade>
                         }
                        <div>
                        <Link href={{ pathname: `/event/${alias}` }}>
                          <button className="px-4 py-2 rounded-lg hover:bg-black/20 duration-100 ">
                            View
                          </button>
                          </Link>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 pt-3 text-center  ">
                  {title}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pronities;
