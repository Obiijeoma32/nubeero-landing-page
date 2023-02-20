import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PrivacyPolicy from "./PrivacyPolicy";
import SideBar from "./SideBar";
import TermsAndCondition from "./TermsAndCondition";

function Timeline() {
  const [termsClick, setTermsClick] = useState(false);
  const [privacyClick, setPrivacyClick] = useState(false);

  function handleTermsClose() {
    setTermsClick(false);
  }
  function handlePolicyClose() {
    setPrivacyClick(false);
  }

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-sidebar">
          <SideBar />
        </div>
        <div className="timeline-details">
          <h1 className="pd-4">Timeline</h1>
          <p className="p">Please fill in the details below so we can get in touch with you</p>

          <div className="timeline-form">
            <form action="mailto:info@nubeero.com">
              <h2>How soon would you like this project to commence?</h2>
              <p>What is your expected start date?</p>
              <div className="div">
                <input className="date" type="date" placeholder="mm/dd/yyyy" required />
              </div>
              <h2>When would you like this project to be completed?</h2>
              <p>What is your expected end date?</p>
              <div className="div">
                <input className="date" type="date" placeholder="mm/dd/yyyy" required />
              </div>
              <div className=" mt-8 flex w-[350px] items-center justify-between">
                <input className="w-[20px] h-[20px] " type="checkbox" required />
                <label className="text-[#00325c] text-[14px]" htmlFor="privacy and Terms">
                  <span onClick={() => setTermsClick(true)} className=" hover:underline cursor-pointer hover:text-[#098db0]">
                    Terms and Conditions
                  </span>
                  ,
                  <span onClick={() => setPrivacyClick(true)} className=" hover:underline cursor-pointer hover:text-[#098db0]">
                    {"  "}
                    Privacy Agreement
                  </span>
                  {"  "}
                  polices
                </label>
              </div>
            </form>
            <div className="basic-button mt-12 mb-10">
              <div className="option-link">
                <Link to="/funding">BACK</Link>
              </div>
              <div className="option-link" style={{ paddingTop: "14px" }}>
                <Link to="/timeline">SUBMIT</Link>
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
