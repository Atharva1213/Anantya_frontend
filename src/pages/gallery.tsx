import React, { useEffect, useState } from "react";

import p1 from "../images/gallery/p1.JPG";
import p2 from "../images/gallery/p2.JPG";
import p3 from "../images/gallery/p3.JPG";
import p4 from "../images/gallery/p4.JPG";
import p5 from "../images/gallery/p5.JPG";
import p6 from "../images/gallery/p6.JPG";
import p7 from "../images/gallery/p7.JPG";
import p8 from "../images/gallery/p8.JPG";
import p9 from "../images/gallery/p9.JPG";
import p10 from "../images/gallery/p10.JPG";
import p11 from "../images/gallery/p11.JPG";
import p12 from "../images/gallery/p12.JPG";
import p13 from "../images/gallery/p13.JPG";
import p14 from "../images/gallery/p14.JPG";
import p15 from "../images/gallery/p15.JPG";
import p16 from "../images/gallery/p16.JPG";
import p17 from "../images/gallery/p17.JPG";
import p18 from "../images/gallery/p18.JPG";
import p20 from "../images/gallery/p20.JPG";
import p21 from "../images/gallery/p21.JPG";
import p22 from "../images/gallery/p22.JPG";
import p23 from "../images/gallery/p23.JPG";
import p24 from "../images/gallery/p24.JPG";

import Image from "next/image";
import { useRouter } from "next/router";
import NavMenu from "@/components/NavMenu";
const images = [
  {
    image: p1,
    className: "",
  },
  {
    image:p2,
    className: "",
  },
  {
    image: p3,
    className: "",
  },
  {
    image: p4,
    className: "",
  },
  {
    image: p5,
    className: "",
  },
  {
    image: p6,
    className: "",
  },
  {
    image: p7,
    className: "",
  },
  {
    image: p8,
    className: "",
  },
  {
    image: p9,
    className: "",
  },
  {
    image: p10,
    className: "",
  },
  {
    image: p11,
    className: "",
  },
  {
    image: p12,
    className: "",
  }, {
    image: p13,
    className: "",
  }, {
    image: p14,
    className: "",
  }, {
    image: p15,
    className: "",
  }, {
    image: p16,
    className: "",
  }, {
    image: p17,
    className: "",
  }, {
    image: p18,
    className: "",
  },  {
    image: p20,
    className: "",
  }, {
    image: p21,
    className: "",
  }, {
    image: p22,
    className: "",
  }, {
    image: p23,
    className: "",
  }, {
    image: p24,
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
