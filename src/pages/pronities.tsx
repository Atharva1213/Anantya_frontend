import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';
import { StaticImageData } from 'next/image';
import { gallery1 } from '../images/gallery';

interface CardData {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
}

const CardsData: CardData[] = [
  {
    id: 1,
    img: gallery1,
    title: 'Codigo',
    desc: 'Each character will appear one by one',
  },
  {
    id: 2,
    img: gallery1,
    title: 'Webbit',
    desc: 'Each character will appear one by one',
  },
  {
    id: 3,
    img: gallery1,
    title: 'Movie Trivia',
    desc: 'Each character will appear one by one',
  },
];

const Pronities: React.FC = () => {
  return (
    <section>
      <div className="md:px-12 xl:px-6">
        <div className="relative pt-36 ">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">
              Top<span className="text-primary text-[#EACD69]">-</span>Events
              <span className="text-primary text-[#EACD69]">.</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
          {CardsData.map(({ id, img, title, desc }) => {
            return (
              <div key={id} className="text-white shadow-md rounded-lg overflow-hidden relative group">
                <img src={img.src} alt="" className="w-full max-w-[300px] h-[350px] rounded-lg" />
                <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {desc}
                    </Fade>
                    <div>
                      <button className="px-4 py-2 rounded-lg hover:bg-black/20 duration-300 ">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pronities;
