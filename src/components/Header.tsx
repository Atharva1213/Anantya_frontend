import Image from "next/image";
import logo1 from "../images/logo1.svg";
import bglogo1 from "../images/bglogo1.png";
import logoText from "../images/logo_text.png";
import CountdownTimer from "./CountdownTimer";

// import useScrollTriggeredCountUp from "./Counter";
import { useRef } from "react";
const Header = () => {
  // const ref = useRef<HTMLDivElement>(null);
  // const count = useScrollTriggeredCountUp(ref, 100); // 0 to 100 count-up
  return (
    <>
      <header>
        <div className="relative inset-x-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-auto h-full object-cover"
            style={{
              position: "fixed",
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              zIndex: -1,
              opacity: 0.3,
            }}
          >
            <source src="/bgvideo1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-screen-md md:mt-0 sm:mt-10">
            <div className="relative h-0 pb-[100%] mt-[100px] md:-mt-10 ">
              <div>
                <Image
                  src={bglogo1}
                  alt="logo"
                  className="absolute inset-0 w-full h-full object-contain opacity-50 animate-spin-slow"
                />
              </div>
              <div>
                <Image
                  src={logo1}
                  alt="logo"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="relative h-0">
              <Image
                src={logoText}
                alt="logo text"
                className="mx-auto w-full h-auto object-contain -mt-[100px] sm:-mt-[10px] md:-mt-[250px] lg:-mt-[300px]"
              />
            </div>
          </div>
          
        </div>
      </header>
      <CountdownTimer />

      {/* <div className="text-white p-5 justify-center items-center ml-12">hello</div> */}
      {/* <div className="flex h-50 w-100 bg-yellow-300 ">
      <div className="text-white text-6xl justify-center p-10 items-center ml-20" ref={ref}>{count}</div>
      <div className="text-white text-6xl justify-center p-10 items-center ml-20" ref={ref}>{count}</div>
      <div className="text-white text-6xl justify-center p-10 items-center ml-20" ref={ref}>{count}</div>
      <div className="text-white text-6xl justify-center p-10 items-center ml-20" ref={ref}>{count}</div>
      <div className="text-white text-6xl justify-center p-10 items-center ml-20" ref={ref}>{count}</div>
      </div> */}
    </>

);

};
export default Header;
