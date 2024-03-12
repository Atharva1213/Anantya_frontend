import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NavMenu from "@/components/NavMenu";

const imageUrls = [
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710250978/p13_2_tf2x8l.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248497/Anantya_2024/x5xxjxchvurk6z5dwsbf.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710250688/p11_xfhkwc.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248510/Anantya_2024/mihchr5rfnhkdsbkd5es.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248510/Anantya_2024/hea7ctnpromltlsccon3.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248510/Anantya_2024/y0jqjaec8rvo5fofnl4c.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248505/Anantya_2024/mcnaq9ukxhkjud4bznoc.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248503/Anantya_2024/rdo82nmtgvi3rbgokhf4.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248495/Anantya_2024/m4xcvhbrkbfpn60kef07.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248492/Anantya_2024/gyn7bq7l98tigvlmjpkz.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248481/Anantya_2024/snus5lte7aznt3hgssa4.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248472/Anantya_2024/rzh3tglg1dbbjbb9kfbo.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248474/Anantya_2024/trsg9hmrof1e5tfnvrta.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248473/Anantya_2024/onaelmws3ln5cnltmpgu.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710248466/Anantya_2024/yiczagpgoi7prjyiyyah.jpg",
  "https://res.cloudinary.com/drpj8yeqp/image/upload/v1710250366/p12_it6s5u.jpg",
];

const Gallery = () => {
  const router = useRouter();
  const [isShowNav, setIsShowNav] = useState(router.query.showNav === "true");

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
        <div className="md:px-12 xl:px-6">
          <div className="relative pt-6">
            <div className="lg:w-2/3 md:text-center mx-auto">
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
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <Image
                src={imageUrl}
                alt=""
                width={300}
                height={350}
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
