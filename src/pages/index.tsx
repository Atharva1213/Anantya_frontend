import React from "react";

import Header from "@/components/Header";
import Image from "next/image";

import Container from "@/components/Layout";
import Gallery from "./gallery";
import Pronities from "./pronities";
import airbnb from "../images/airbnb.svg";
import Events from "./events";
import { useRouter } from "next/router";

export default function PreviewPage() {
  const router = useRouter();
  const showNav = router.query.showNav;
  return (
    <>
      <Container>
        <Header />
        <section className="mt-20 -pt-[50px]">
          <div className="shadow"></div>
        </section>
        <div>
          <Gallery />
          <Pronities />
          <Events headerShown={false} />
        </div>
      </Container>
    </>
  );
}
