import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavMenu from "@/components/NavMenu";

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
      <section className="p-10 md:p-20">
        <div className="   md:px-12 xl:px-6">
          <div className="relative pt-36 ">
            <div className="lg:w-2/3 md:text-center  mx-auto">
              <p className="text-white font-bold text-4xl md:text-3xl xl:text-4xl">
                Event Calender To Be Disclosed Soon ...      
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
