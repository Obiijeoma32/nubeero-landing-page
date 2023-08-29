import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PrivacyPolicy from "./PrivacyPolicy";
import SideBar from "./SideBar";
import TermsAndCondition from "./TermsAndCondition";
import { useLocation } from "react-router-dom";


function Timeline() {
  const [termsClick, setTermsClick] = useState(false);
  const [privacyClick, setPrivacyClick] = useState(false);
const [termsAndCondition, setTermsAndCondtiion] = useState(false)

  function handleTermsClose() {
    setTermsClick(false);
  }
  function handlePolicyClose() {
    setPrivacyClick(false);
  }

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [projectCommence, setProjectCommence] = useState("");
  const [projectCompletion, setProjectCompletion] = useState("");
  

  const handleProjectCommence = (event) => {
    setProjectCommence(event.target.value);
  };
  const handleProjectCompletion = (event) => {
    setProjectCompletion(event.target.value);
  };
 

  const handleSaveClick = async () => {
  if (termsAndCondition === true) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectCommence: projectCommence,
          projectCompletion: projectCompletion,
        }),
      };

      console.log(requestOptions);

      fetch(
        `https://nubeerobackend.onrender.com/basicInfo/${id}/timeline`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(data.responsecode);

          window.location.href = "/home";
        })
        .catch((err) => {
          console.log(err.message);
        });
  }else{

  }
  };

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-sidebar">
          <SideBar />
        </div>
        <div className="timeline-details">
          <h1 className="pd-4">Timeline</h1>
          <p className="p">
            Please fill in the details below so we can get in touch with you
          </p>

          <div className="timeline-form">
            <form action="mailto:info@nubeero.com">
              <h2>How soon would you like this project to commence?</h2>
              <p>What is your expected start date?</p>
              <div className="div">
                <input
                  className="date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  required
                  onChange={handleProjectCommence}
                />
              </div>
              <h2>When would you like this project to be completed?</h2>
              <p>What is your expected end date?</p>
              <div className="div">
                <input
                  className="date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  required
                  onChange={handleProjectCompletion}
                />
              </div>
              <div className=" mt-8 flex w-[350px] items-center justify-between">
                <input
                  value={TermsAndCondition}
                  onChange={() => {
                    setTermsAndCondtiion(!termsAndCondition);
                     console.log(termsAndCondition);}}
                  className="w-[20px] h-[20px] "
                  type="checkbox"
                  required
                />
                <label
                  className="text-[#00325c] text-[14px]"
                  htmlFor="privacy and Terms"
                >
                  <span
                    onClick={() => setTermsClick(true)}
                    className=" hover:underline cursor-pointer hover:text-[#098db0]"
                  >
                    Terms and Conditions
                  </span>
                  ,
                  <span
                    onClick={() => setPrivacyClick(true)}
                    className=" hover:underline cursor-pointer hover:text-[#098db0]"
                  >
                    {"  "}
                    Privacy Agreement
                  </span>
                  {"  "}
                  polices
                </label>
                {termsAndCondition}
                {console.log(termsAndCondition)}
              
              </div>
            </form>
            <div className="basic-button mt-12 mb-10">
              <div className="option-link">
                <Link to="/funding">BACK</Link>
              </div>
              <div
                className="option-link"
                style={{ paddingTop: "14px" }}
                onClick={handleSaveClick}
              >
                SUBMIT
              </div>
            </div>
          </div>
        </div>
      </div>
      {termsClick && <TermsAndCondition handleTermsClose={handleTermsClose} />}
      {privacyClick && <PrivacyPolicy handlePolicyClose={handlePolicyClose} />}
    </>
  );
}

export default Timeline;
