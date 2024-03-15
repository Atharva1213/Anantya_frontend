import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import events from "../../eventDetails";
import Image from "next/image";
import LottieAnimation from "../../components/LottieAnimation";
import NavMenu from "@/components/NavMenu";
import { ImCross } from "react-icons/im";
import close from "../../images/close.svg";
import Qr from "../../images/QR.jpeg";
import whatslink from "../../images/whatslink.jpeg";

const EventDetails = () => {
  const [currentParticipant, setCurrentParticipant] = useState(0);
  const [registerUser, setregisterUser] = useState(false);
  const [paymentmode, setpaymentmode] = useState(false);
  const [users, setUsers] = useState<Participant[]>([]);
  const [paymentStep, setpaymentStep] = useState(1);
  const [loading, setloading] = useState(false);
  const [OneNumber,setOneNumber]=useState("1");
  const [showPopup, setShowPopup] = useState(false);
  const [finalResult, setfinalResut] = useState(false);
  type Participant = {
    email: string;
  };

  const [currentParticipantData, setCurrentParticipantData] =
    useState<Participant>({
      email: ""
    });
  const router = useRouter();
  const { id } = router.query;
  const event = events.find((event) => event.alias === id);
  if (!event) {
    return <div>Event not found</div>;
  }
  const isPCCOEEmail = (email: string) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@pccoepune\.org\b/;
    return emailRegex.test(email);
  };
  const registerEventApiCall = async () => {
    try {
      setloading(true);
      const result = await axios.post(
        "https://anantya-backend-1.onrender.com/api/register/registerevent",
        {
          user: users,
          eventId: event.id,
          type: users.every((user) => isPCCOEEmail(user["email"]))
            ? "PCCOE"
            : "Other",
          ownermail: "pccoeanantya62@gmail.com",
          ownerpassword: "rvcl roua nwpb fsax",
          eventCoordinatorName: event.coordinators.students[0].name,
          eventCoordinatorPhone: event.coordinators.students[0].phone,
          eventName: event.name,
        }
      );
      closeHanlder();
      handleApiResponse(result.data);
    } catch (error) {
      closeHanlder();
      handleApiError();
    }
  };

  const allregisteremail=async(data:any)=>{
    try {
      const result = await axios.post(
        "https://anantya-backend-1.onrender.com/api/register/validemail",
        {
          user: data,
        }
      );
      console.log(result);
      return result.data.message  === "yes" ? true : false;
    } catch (error) {
    }
  }
  const allregisteremailevent=async(data:any)=>{
    try {
      const result = await axios.post(
        "https://anantya-backend-1.onrender.com/api/register/validemailevent",
        {
          user: data,
          eventId: event.id,
        }
      );
      return result.data.message  === "yes" ? true : false;
    } catch (error) {
      console.log(error);
    }
  }
  const handleApiResponse = (data: any) => {
    setloading(false);
    if (data.message !== "401") {
      setregisterUser(true);
      setTimeout(() => {
        setregisterUser(false);
        window.location.href = "/";
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
    const uniqueEmails = new Set();
    for (const user of users) {
      if (uniqueEmails.has(user.email)) {
        toast.warning("Duplicate emails found, please ensure each user has a unique email", {
          autoClose: 6000,
          position: "top-center",
        });
        setfinalResut(false);
        return;
      }
      uniqueEmails.add(user.email);
    }
    setfinalResut(false);
    setloading(true);
    const result = await allregisteremail(users); 
    if (!result) {
      toast.warning("Team Member Should Sign up and Verified" , {
        autoClose: 6000,
        position: "top-center",
      });
      
      setloading(false);
      window.location.href="/signup";
      return;
    }
    const result1 = await allregisteremailevent(users); 
    if (!result1) {
      toast.warning("Already registered for this event", {
        autoClose: 6000,
        position: "top-center",
      }); 
      setloading(false);
      return;
    }
    if (event.name === "Poster Presentation") {
      registerEventApiCall();
    }else {
      const areAllPCCOEEmails = users.every((user) => isPCCOEEmail(user.email));
      if (areAllPCCOEEmails) {
        registerEventApiCall();
      } else {
        setpaymentmode(true);
        setloading(false);
      }
    }
  };
  const closeHanlder = () => {
    setUsers([]);
    setregisterUser(false);
    setpaymentmode(false);
    setpaymentStep(1);
    setCurrentParticipant(0);
    setCurrentParticipantData({
      email: ""
    });
  };
  const togglePopup = () => {
    if (event.name === "Project Competition") {
      toast.warning("Registraton is Full", {
        autoClose: 6000,
        position: "top-center",
      });
      return;
    } else {
      setShowPopup(!showPopup);
      setCurrentParticipant(0);
      setCurrentParticipantData({ email: "" });
      setUsers([]);
    }
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(currentParticipantData.email)) {
      toast.warning("Please enter a valid email address.", {
        autoClose: 6000,
        position: "top-center",
      });
      return false;
    }
    return true;
  };
  const handleNextOrSubmit = () => {
    const isValid = validateParticipantData();
    if (!isValid) {
      return;
    }
    if ((currentParticipant + 1).toString() <= event["participantno"]) {
      setCurrentParticipant(currentParticipant + 1);
      setUsers([...users, currentParticipantData]);
      setCurrentParticipantData({
        email: ""
      });
    }
    if ((currentParticipant + 1).toString() === event.participantno) {
      setfinalResut(true);
      setShowPopup(false);
    }
  };

  const closeRegsitrationHanlder = () => {
    setfinalResut(false);
    setCurrentParticipant(0);
    setCurrentParticipantData({
      email: ""
    });
    setUsers([]);
  };

  return (
    <>
      <NavMenu />
      <ToastContainer />
      <div className=" text-white p-10">
        <article className="col-span-9 mt-12 justify-center flex">
          <div className="">
            <div>
              <h1 className="text-white text-center font-bold text-4xl md:text-5xl xl:text-6xl">
                {event.name}
                <span className="text-primary text-[#EACD69]">.</span>
              </h1>
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
              <div className="flex justify-center">
                 <h2>Participant Count  - {event.participantno}</h2>
              </div>
              <div className="lg:w-2/3 md:text-center mx-auto flex justify-center mt-7">
                <a>
                  <button
                    type="button"
                    onClick={() => {
                      if (!event.website) {
                        togglePopup();
                      } else {
                        window.open(event.website, "_blank");
                      }
                    }}
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    Register Here
                  </button>
                </a>
              </div>
            </div>
          </div>
        </article>
        <div className="mx-auto px-4 md:px-0 max-w-7xl flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">About Event</h2>
              <p className="md:text-lg text-justify mt-2">{event.aboutEvent}</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex  text-center flex-col gap-6">
              <div>
                <h4 className="text-2xl font-bold md:text-3xl">
                  Rules and Regulations
                </h4>
                <a
                  href={event.rulebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    style={{ marginTop: "1.2vh" }}
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3 text-center"
                  >
                    RuleBook Here
                  </button>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-2xl font-bold md:text-3xl">
                    Student Coordinators
                  </h4>
                  <div className="space-y-2 mt-3">
                    {event.coordinators.students.map((item, index) => (
                      <p className="text-lg lg:pl-6" key={index}>
                        {item.name} (
                        <a href={`tel:${item.phone}`}>{item.phone}</a>)
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold md:text-3xl">
                    Faculty Coordinators
                  </h4>
                  <div className="space-y-2 mt-3">
                    {event.coordinators.faculty &&
                      event.coordinators.faculty.map((item, index) => (
                        <p className="text-lg lg:pl-6" key={index}>
                          Prof. {item}
                        </p>
                      ))}
                  </div>
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
          <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 backdrop-filter backdrop-blur-lg flex justify-center items-center overflow-auto">
            <div
              className="wholpayment bg-white rounded-lg shadow-lg text-black overflow-auto backdrop-filter backdrop-blur-lg "
              style={{
                display: "flex",
                gap: "2vh",
                padding: "1vh 2vh",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "1vh",
                }}
              >
                <div style={{ width: "90%" }}>
                  <h2 className="text-center font-bold">PAYMENT MODE</h2>
                </div>
                <span className="text-right" onClick={closeHanlder}>
                  <Image src={close} alt="error" />
                </span>
              </div>
              {paymentStep === 1 && (
                <div className="paymentFormStep">
                  <div className="paymentform">
                    <h2 className="font-bold">Payment Instructions</h2>
                    <p>Payment process includes a three-step process:</p>
                    <p>
                      <span className="font-bold">Step - 1: </span>Scan the QR
                      code (for payment).
                    </p>
                    <p>
                      <span className="font-bold">Step - 2: </span>Send the
                      screenshot of successful payment to the given WhatsApp
                      link following the provided template for the WhatsApp
                      message.
                    </p>
                    <p>
                      <span className="font-bold">Step - 3: </span>Click on the
                      "Payment Complete" button for registration. After that,
                      you will receive an email for payment initiation. Once the
                      verification is completed by the Anatya24 team, you will
                      receive a payment successful email.
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      type="button"
                      onClick={() => {
                        setpaymentStep(2);
                      }}
                      className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                    >
                      Way To Payment
                    </button>
                  </div>
                  <div className="paymentform">
                    <h2 className="font-bold">WhatsApp Message:</h2>
                    <pre>
                      EventName - (event name) <br />
                      Name - (payment holder) <br />
                      Amount - (amount) <br />
                      Screenshot - (photo) <br />
                    </pre>
                  </div>
                </div>
              )}
              {paymentStep === 2 && (
                <div className="paymentFormStep">
                  <div className="paymentQR">
                    <span>
                      Rs. {event.Amount} - Registration fee for non-PCCOEian to
                      Practicate
                    </span>
                    <Image src={Qr} alt="error" className="QrImage" />
                    <button
                      type="button"
                      onClick={() => {
                        setpaymentStep(3);
                      }}
                      className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                    >
                      Payment Complete
                    </button>
                  </div>
                </div>
              )}
              {paymentStep === 3 && (
                <div className="paymentFormStep">
                  <div>
                    <div className="paymentQR">
                      <h3>WhatsApp Message</h3>
                      <Image src={whatslink} alt="error" className="QrImage" />
                      <button
                        type="button"
                        onClick={() => {
                          registerEventApiCall();
                        }}
                        className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                      >
                        Register Here
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {loading && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 backdrop-filter backdrop-blur-lg flex justify-center items-center">
            <div
              className="Loadingdiv bg-white rounded-lg shadow-lg text-black overflow-hidden backdrop-filter backdrop-blur-lg"
              style={{
                display: "flex",
                gap: "1vh",
                padding: "1vh 0.4vh",
                flexDirection: "column",
              }}
            >
              <div className="LoadingDiv">
                <div className="loader"></div>
                <h2 className="text-center font-bold">Please Wait : Loading</h2>
              </div>
            </div>
          </div>
        )}
        {finalResult && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 backdrop-filter backdrop-blur-lg flex justify-center items-center overflow-auto">
            <div
              className="Loadingdiv bg-white rounded-lg shadow-lg text-black overflow-hidden backdrop-filter backdrop-blur-lg"
              style={{
                display: "flex",
                gap: "1vh",
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
                  <h2 className="text-center font-bold">Final Confirmation </h2>
                </div>
                <span className="text-right" onClick={closeRegsitrationHanlder}>
                  <Image src={close} alt="error" />
                </span>
              </div>
              <div className="LoadingDiv">
                <div className="FinalDiv">
                  <p>Team List :</p>
                  {users &&
                    users.map((item, index) =>
                      item ? (
                        <div key={index} className="liststype">
                          <span>{item.email}</span>
                        </div>
                      ) : null
                    )}
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                    onClick={handleButtonClick}
                  >
                    Way to Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showPopup && (
        <div className="popup bg-black bg-opacity-50 z-50 backdrop-filter backdrop-blur-lg">
          <div className="popup-content">
            <div className="login-box" style={{height:"50vh",overflow:"hidden"}}>
              <div className="text-white">
                <div className="cross">
                  <h1>Event Registration</h1>
                  <ImCross onClick={togglePopup} />
                </div>
                <br />
                {currentParticipant + 1 === 1 ? (
                  <div>Group Leader </div>
                ) : (
                  <div>Member: {currentParticipant + 1} </div>
                )}
              </div>
              <br />
              <form>
                <div>
                  <span style={{fontSize:"1.2vh",color:"#fff"}}>Please Enter College Email only  ..</span>
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
                <div className="form-flexbtn">
                  {event.participantno === OneNumber.toString()||
                  event.participantno ===
                    (currentParticipant + 1).toString() ? (
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
