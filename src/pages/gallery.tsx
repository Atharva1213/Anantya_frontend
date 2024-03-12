import React, { useEffect, useState } from "react";
import {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p20,p21,p22,p23,p24} from "../images/gallery";
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
