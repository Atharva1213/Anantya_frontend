import React from "react";

import Header from "@/components/Header";

import Container from "@/components/Layout";
import Gallery from "./gallery";
import Pronities from "./pronities";
import Events from "./events";
import { useRouter } from "next/router";

export default function PreviewPage() {
  const router = useRouter();
  const showNav = router.query.showNav;
  return (
    <>
      <Container>
        <Header />
        <div>
          <Gallery />
          <Pronities />
          <Events headerShown={false} />
        </div>
      </Container>
    </>
  );
}
