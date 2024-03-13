import React,{useEffect, useState} from "react";

import Header from "@/components/Header";

import Container from "@/components/Layout";
import Gallery from "./gallery";
import Pronities from "./pronities";
import Events from "./events";
import { useRouter } from "next/router";
export default function PreviewPage() {
  const router = useRouter();
  const [ismobile,setMobile]=useState(false);
  const showNav = router.query.showNav;

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Container>
        <Header />
        <div>
          {!ismobile &&<Gallery />}
          <Pronities isMobile={ismobile} />
          <Events headerShown={false} />
        </div>
      </Container>
    </>
  );
}
