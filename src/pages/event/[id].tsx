import { useRouter } from "next/router";
import React from "react";
import { events } from "../../eventDetails";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = events.find((event) => event.alias === id);
  if (!event) {
    return <div>Event not found</div>;
  }
  return (
    <>
      <NavMenu />
      <div className=" text-white p-10">
        <article className="col-span-9 mt-12 justify-center flex">
          <div className="">
            <div>
              <h1 className="text-white font-bold text-4xl md:text-5xl xl:text-6xl">
                {event.name}
                <span className="text-primary text-[#EACD69]">.</span>
              </h1>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2 space-x-2 text-lg">
                  <p className="m-0 text-lg md:text-xl">{event.alias}</p>
                  <p className="m-0">•</p>
                </div>
                </div>
              </div>
            </div>
            <div className="my-12">
              <Image
                className="rounded-xl object-fit"
                src={event.image}
                width={500}
                height={584}
                alt={"article cover"}
                priority
              />
       <div className="mx-auto flex flex-col gap-3 text-center w-80 p-4 rounded-lg border-s-white" style={{width:"80%",padding:"4vh",border:"1px solid #fff",borderRadius:"2.4vh"}}>
       <div className="flex flex-col gap-3">
       <div className="w-100 flex flex-col gap-1">
      <h2 className="text-1xl font-bold font-headings md:text-2xl">
        About Event.
      </h2>{" "}
      <p className="md:p-4 text-justify mt-2">{event.aboutEvent}</p>
    </div>
       </div>
       <div className="flex flex-col gap-5">
       <div className="w-100 flex flex-col gap-3">
       <h4 className="text-1xl font-bold font-headings md:text-2xl">
        Rules and Regulations
       </h4>
       <a>
        <button
          type="button"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-3 py-3 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          RuleBook Here
        </button>
      </a>
    </div>
    <div className="w-full flex gap-1.7 text-center items-center justify-evenly">
      <div>
        <h4 className="text-1xl font-bold font-headings md:text-2xl">
          Student Coordinators
        </h4>
        <div className="space-y-2 mt-3">
          {event.coordinators.students.map((item, index) => (
            <p className="lg:p-2 lg:ml-10 text-justify" key={index}>
              {item.name} (<a href={`tel:${item.phone}`}>{item.phone}</a>)
            </p>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-1xl font-bold font-headings md:text-2xl">
          Faculty Coordinators
        </h4>
        <div className="space-y-2 mt-3">
          {event.coordinators.faculty.map((item, index) => (
            <p className="lg:p-2 text-justify lg:ml-10" key={index}>
              Prof. {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
       </div>

      </div>
    </>
  );
};

export default EventDetails;
