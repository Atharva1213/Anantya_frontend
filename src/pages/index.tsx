import React,{useEffect} from "react";

import Header from "@/components/Header";

import Container from "@/components/Layout";
import Gallery from "./gallery";
import Pronities from "./pronities";
import Events from "./events";
import event from "../eventDetails";
import { useRouter } from "next/router";
import axios from "axios";

export default function PreviewPage() {
  const router = useRouter();
  const showNav = router.query.showNav;

  useEffect(() => {
    const currentDate = new Date();
    if (
      currentDate.getHours() === 0 &&
      currentDate.getMinutes() === 0 &&
      currentDate.getSeconds() === 0
    ) {
      const fetchData = async () => {
        try {
          await axios.post("http://localhost:9190/api/register/sendmail", { event });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [event]); 
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
