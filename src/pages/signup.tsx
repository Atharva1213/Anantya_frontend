import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavMenu from "@/components/NavMenu";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Gallery = () => {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  type Participant = {
    name: string;
    email: string;
    contact: string;
    collegeName: string;
    division: string;
    department: string;
    year: string;
  };

  const [currentParticipantData, setCurrentParticipantData] =
    useState<Participant>({
      name: "",
      email: "",
      contact: "",
      collegeName: "",
      division: "A",
      department: "Computer",
      year: "1st",
    });

  const [isShowNav, setIsShowNav] = useState(true);

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
    setIsShowNav(router.query.showNav === "true");
  }, [router.query.showNav]);
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
  const handleNextOrSubmit = async () => {
    const isValid = validateParticipantData();
    if (!isValid) {
      return;
    }
    await registerSuccessfullyApiCall();
  };
  const handleApiResponse = (data: any) => {
    if (data.message !== "401") {
      toast.success(data.message, {
        autoClose: 2000,
        position: "top-center",
      });
      setimeout(()=>{ 
      window.location.href = "/";
      },1200);
    } else {
      toast.error(data.title, {
        autoClose: 6000,
        position: "top-center",
      });
         setimeout(()=>{ 
      window.location.href = "/signup";
      },1200);
    }
  };
  const handleApiError = () => {
    toast.error("An error occurred while processing your request", {
      autoClose: 6000,
      position: "top-center",
    });
  };

  const registerSuccessfullyApiCall = async () => {
    try {
      setloading(true);
      const result = await axios.post(
        "https://anantya-backend-1.onrender.com/api/register/signupmail",
        {
          user: currentParticipantData,
          ownermail: "pccoeanantya705@gmail.com",
          ownerpassword: "tlzx fwli pgeg zizs",
        }
      );
      setloading(false);
      handleApiResponse(result.data);
    } catch (error) {
      handleApiError();
    }
  };
  return (
    <>
      {isShowNav && <NavMenu />}
      <section className="p-10 md:p-20">
        <ToastContainer />
        <div className="   md:px-12 xl:px-6">
          <div className="relative pt-36 ">
            <div className="lg:w-2/3 md:text-center  mx-auto">
              <div className="popup1">
                <div className="popup-content">
                  <div className="login-box">
                    <div className="text-white">
                      <div className="cross">
                        <h1>Sign Up Form</h1>
                      </div>
                      <br />
                      <div style={{ textAlign: "left" }}>Member Details :</div>
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
                      <div style={{ alignContent: "left" }}>
                        <span
                          style={{
                            fontSize: "1.2vh",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "flex-start",
                          }}
                        >
                          Please Enter College Email only ..
                        </span>
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
                          <option value="AiML">AiML</option>{" "}
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
                        <a href="#" onClick={handleNextOrSubmit}>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Submit
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
};

export default Gallery;
