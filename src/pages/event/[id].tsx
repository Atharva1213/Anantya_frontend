import { useRouter } from "next/router";
import React, { use, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eventDetails, { events } from "../../eventDetails";
import Image from "next/image";
import LottieAnimation from "../../components/LottieAnimation";
import NavMenu from "@/components/NavMenu";
import ReactDOM from "react-dom";

import { ImCross } from "react-icons/im";

const EventDetails = () => {
  const [currentParticipant, setCurrentParticipant] = useState(0);
  const [registerUser, setregisterUser] = useState(false);
  const [paymentmode, setpaymentmode] = useState(false);
  const [users, setUsers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentParticipantData, setCurrentParticipantData] = useState({
    name: "",
    email: "",
    contact: "",
    collegeName: "",
    division: "A", 
    department: "Computer", 
    year: "1st",
  });
  const router = useRouter();
  const { id } = router.query;
  const event = events.find((event) => event.alias === id);
  if (!event) {
    return <div>Event not found</div>;
  }
  const isPCCOEEmail = (email) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@pccoepune\.org\b/;
    return emailRegex.test(email);
  };

  const registerEventApiCall = async (users) => {
    try {
      const result = await axios.post(
        "http://localhost:9190/api/register/registerevent",
        {
          user: users,
          eventId: 1,
          type: "PCCOE",
        }
      );
      handleApiResponse(result.data);
    } catch (error) {
      handleApiError();
    }
  };

  const handleApiResponse = (data) => {
    if (data.message !== "401") {
      setregisterUser(true);
      setTimeout(() => {
        setregisterUser(false);
      }, 2000);
      toast.success(data.message, {
        autoClose: 2000,
        position: "top-center",
      });
    } else {
      toast.error(data.title, {
        autoClose: 6000,
        position: "top-center",
      });
    }
  };

  const handleApiError = () => {
    toast.error("An error occurred while processing your request", {
      autoClose: 6000,
      position: "top-center",
    });
  };

  const handleButtonClick = async () => {
    if (!users || users.length === 0) {
      toast.warning("No users to check", {
        autoClose: 6000,
        position: "top-center",
      });
      return;
    }

    const areAllPCCOEEmails = users.every((user) => isPCCOEEmail(user.email));
    if (areAllPCCOEEmails) {
      registerEventApiCall(users);
    } else {
      setpaymentmode(true);
    }
  };

  const closeHanlder = () => {
    setUsers(users);
    setregisterUser(false);
    setpaymentmode(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setCurrentParticipant(0);
    setCurrentParticipantData({
      name: "",
      email: "",
      contact: "",
      collegeName: "",
      division: "A",
      department: "Computer",
      year: "1st",
    });
    setUsers([]);
  };

  const validateParticipantData = () => {
    const isAllFieldsFilled = Object.values(currentParticipantData).every(
        (value) => value.trim() !== ""
    );

    if (!isAllFieldsFilled) {
        toast.warning("Please fill all the fields before proceeding.", {
            autoClose: 6000,
            position: "top-center",
        });
        return false;
    }

    const nameRegex = /^[A-Za-z\s]{1,}$/;
    if (!nameRegex.test(currentParticipantData.name)) {
        toast.warning("Please enter a valid name.", {
            autoClose: 6000,
            position: "top-center",
        });
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(currentParticipantData.email)) {
        toast.warning("Please enter a valid email address.", {
            autoClose: 6000,
            position: "top-center",
        });
        return false;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(currentParticipantData.contact)) {
        toast.warning("Please enter a valid 10-digit phone number.", {
            autoClose: 6000,
            position: "top-center",
        });
        return false;
    }
    if (!nameRegex.test(currentParticipantData.collegeName)) {
        toast.warning("Please enter a valid College name.", {
            autoClose: 6000,
            position: "top-center",
        });
        return false;
    }

    return true;
};



  const handleNextOrSubmit = () => {
    console.log("entering");
    const isValid = validateParticipantData();
    if (!isValid) {
        return;
    }
    if (currentParticipant + 1 <= event.participantno) {
        setCurrentParticipant(currentParticipant + 1);
        setUsers([...users, currentParticipantData]);
        setCurrentParticipantData({
          name: "",
          email: "",
          contact: "",
          collegeName: "",
          division: "A",
          department: "Computer",
          year: "1st",
        });
    }
    if (currentParticipant + 1 === event.participantno) {
        console.log("Submitting", users);
    }
};


  return (
    <>
      <NavMenu />
      <ToastContainer />
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
            <div className="my-12">
              <Image
                className="rounded-xl object-fit"
                src={event.image}
                width={500}
                height={584}
                alt={"article cover"}
                priority
              />
              <div className="mt-6 flex justify-between ">
                <p className="flex items-center  text-gray-500">
                  <svg
                    style={{ color: "white", marginRight: 10 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-calendar-day"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z"
                      fill="white"
                    ></path>{" "}
                    <path
                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                  {event.schedule.day}
                </p>
                <p className="flex items-center text-gray-500">
                  <svg
                    style={{ color: "white", marginRight: 10 }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                  {event.schedule.time}
                </p>
                <p className="flex items-center text-gray-500">
                  <svg
                    style={{ color: "white", marginRight: 10 }}
                    width="25"
                    height="25"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="white"
                      d="M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
                    ></path>
                  </svg>
                  {event.schedule.venue}
                </p>
              </div>
              <div className="lg:w-2/3 md:text-center mx-auto flex justify-center mt-7">
                <a>
                  <button
                    type="button"
                    onClick={togglePopup}
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    Register Here
                  </button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <div className="mx-auto flex flex-col gap-3 text-center w-82 p-4 rounded-xl ring-2 ring-offset-2 hover:ring-offset-4">
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
                      {item.name} (
                      <a href={`tel:${item.phone}`}>{item.phone}</a>)
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
        {registerUser && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 backdrop-filter backdrop-blur-lg flex justify-center items-center">
            <LottieAnimation />
          </div>
        )}
        {paymentmode && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 backdrop-filter backdrop-blur-lg flex justify-center items-center">
            <div
              className="w-1/2 h-1/2 bg-white rounded-lg shadow-lg text-black overflow-hidden backdrop-filter backdrop-blur-lg"
              style={{
                display: "flex",
                gap: "2vh",
                padding: "1vh 0.4vh",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div style={{ width: "90%" }}>
                  <h2 className="text-center font-bold">PAYMENT MODE</h2>
                </div>
                <span className="text-right" onClick={closeHanlder}>
                  <span className="material-symbols-outlined">close</span>
                </span>
              </div>
              <div
                className="text-center"
                style={{ width: "100%", height: "70%", backgroundColor: "red" }}
              >
                Qr
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Register Here
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="login-box">
              <div className="text-white">
                <div className="cross">
                  <h1>Event Registration</h1>
                  <ImCross onClick={togglePopup} />
                </div>
                <br />
                <div>Member: {currentParticipant + 1}</div>
              </div>
              <br />

              <form>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={currentParticipantData.name}
                    onChange={(e) =>
                      setCurrentParticipantData({
                        ...currentParticipantData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={currentParticipantData.email}
                    onChange={(e) =>
                      setCurrentParticipantData({
                        ...currentParticipantData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label>Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="contact"
                    value={currentParticipantData.contact}
                    onChange={(e) =>
                      setCurrentParticipantData({
                        ...currentParticipantData,
                        contact: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label>College Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="collegename"
                    value={currentParticipantData.collegeName}
                    onChange={(e) =>
                      setCurrentParticipantData({
                        ...currentParticipantData,
                        collegeName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label>Division: </label>
                  <select
                    className="form-control"
                    name="division"
                    value={currentParticipantData.division}
                    onChange={(e) =>
                      setCurrentParticipantData({
                        ...currentParticipantData,
                        division: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
                </div>

                <div>
                  <label>Department: </label>
                  <select
                    className="form-control"
                    name="department"
                    value={currentParticipantData.department}
                    onChange={(e) =>
                      setCurrentParticipantData({
                        ...currentParticipantData,
                        department: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="Computer">Computer</option>
                    <option value="IT">IT</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="ENTC">ENTC</option>
                    <option value="Civil">Civil</option>
                  </select>
                </div>

                <div>
                  <label>Year:</label>
                  <select
                    className="form-control"
                    name="year"
                    value={currentParticipantData.year}
                    onChange={(e) =>
                      setCurrentParticipantData({
                        ...currentParticipantData,
                        year: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                  </select>
                </div>

                <div className="form-flexbtn">
                  {event.participantno == 1 ||
                  event.participantno === currentParticipant + 1 ? (
                    <>
                      <a href="#" onClick={handleNextOrSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="#"
                        onClick={() => {
                          handleNextOrSubmit();
                        }}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Next
                      </a>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
