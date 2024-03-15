import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const MyComponent = () => {
  const router = useRouter();
  const { token } = router.query;
  const [loading, setloading] = useState(false);
  const handleApiResponse = (data: any) => {
    if (data.message !== "407") {
      toast.success(data.message, {
        autoClose: 2000,
        position: "top-center",
      });
      setTimeout(() => {
        window.location.href = "/";
      },4000);
    } else {
      if (data.title !== "") {
        toast.error(data.title, {
          autoClose: 6000,
          position: "top-center",
        });
      } else {
        window.location.href = "/";
      }
    }
  };
  const handleApiError = () => {
    toast.error("An error occurred while processing your request", {
      autoClose: 6000,
      position: "top-center",
    });
  };
  const fetchData = async () => {
    try {
      setloading(true);
      const result = await axios.post(
        "https://anantya-backend-1.onrender.com/api/register/updated",
        { token: token }
      );
      setloading(false);
      handleApiResponse(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      handleApiError();
    }
  };
  return (
    <div className="justify-center flex items-center" style={{ color: "#fff" }}>
      <ToastContainer />
      <div className="justify-center flex flex-col gap-3 items-center mt-[50px]">
        <span style={{ fontSize: "2.9vh" }}>
          Please Click here to Verify Your Mail
        </span>
        <div className="normalbutton" onClick={fetchData}>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Verify Here
          </a>
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
    </div>
  );
};

export default MyComponent;
