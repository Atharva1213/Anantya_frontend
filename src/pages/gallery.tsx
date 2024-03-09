import React, { useEffect, useState } from "react";
import  CODIGO from "../images/gallery/CODIGO.png";
import ALPHA_BYTE from "../images/gallery/ALPHA_BYTE.png";
import CAT from "../images/gallery/CAT.png";
import IPL_AUCTION from "../images/gallery/IPL_AUCTION.png";
import ACTION_REPLAY from "../images/gallery/ACTION_REPLY.png";
import CODE_IN_THE_DARK from "../images/gallery/CODE_IN_THE_DARK.png";
import MIND_MATRIX from "../images/gallery/MIND_MATRIX.png";
import PROJECT_COMPETITION from "../images/gallery/PROJECT_COMPLETION.png";
import POSTER_PRESENTATION from "../images/gallery/POSTER_PRESENTATION.png";
import CHRONOCLASH from "../images/gallery/CHRONOCLASH.png";
import BYTE_ME from "../images/gallery/BYTE_ME.png";
import SHERLOCK from "../images/gallery/SHERLOCK.png";
import Image from "next/image";
import { useRouter } from "next/router";
import NavMenu from "@/components/NavMenu";
const images = [
  {
    image: CODIGO,
    className: "",
  },
  {
    image: ALPHA_BYTE,
    className: "",
  },
  {
    image: CAT,
    className: "",
  },
  {
    image: IPL_AUCTION,
    className: "",
  },
  {
    image: ACTION_REPLAY,
    className: "",
  },
  {
    image: CODE_IN_THE_DARK,
    className: "",
  },
  {
    image: MIND_MATRIX,
    className: "",
  },
  {
    image: PROJECT_COMPETITION,
    className: "",
  },
  {
    image: POSTER_PRESENTATION,
    className: "",
  },
  {
    image: CHRONOCLASH,
    className: "",
  },
  {
    image: BYTE_ME,
    className: "",
  },
];

const Gallery = () => {
  const router = useRouter();
  let showNav = router.query.showNav;
  const [isShowNav, setIsShowNav] = useState(showNav === "true");

  useEffect(() => {
    const handlePopstate = () => {
      setIsShowNav(false);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  return (
    <>
      {isShowNav && <NavMenu />}
      <section className="p-5 md:p-20">
        <div className="   md:px-12 xl:px-6">
          {" "}
          <div className="relative pt-6">
            <div className="lg:w-2/3 md:text-center  mx-auto">
              <h1 className="text-white font-bold text-4xl md:text-6xl xl:text-7xl">
                GLIMPSES OF <br />{" "}
                <span className="text-primary text-green-700">
                  ANANTYA 2023.
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5 p-5 mt-10">
          {images.map((item) => (
            <div className={item.className}>
              <Image
                src={item.image}
                alt=""
                className="w-full max-w-[300px] max-h-[350px] rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
};

export default Gallery;
