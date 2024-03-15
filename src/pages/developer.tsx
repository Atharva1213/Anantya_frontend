import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavMenu from "@/components/NavMenu";
import axios from "axios";
import event from "../eventDetails";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.post(
          "https://anantya-backend.onrender.com/api/register/sendmail",
          { event }
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {isShowNav && <NavMenu />}
      <section className="p-10 md:p-20">
        <div className="   md:px-12 xl:px-6">
          <div className="relative pt-36 ">
            <div className="lg:w-2/3 md:text-center  mx-auto">
              <p className="text-white font-bold text-4xl md:text-3xl xl:text-4xl">
                welcome to developer tools
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
