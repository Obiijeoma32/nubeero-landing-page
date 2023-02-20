import { useState } from "react";
import { Link } from "react-router-dom";
import SecondBasicSideBar from "./SecondBasicSideBar";
import TermsAndCondition from "./TermsAndCondition";
import PrivacyPolicy from "./PrivacyPolicy";
import "../App.css";

function ResourcesForBasicInfo() {
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
      <div className="flex mt-4 basic-container">
        <div className="sidebar-basic">
          <SecondBasicSideBar />
        </div>
        <div className="basic-form">
          <h1>Confirm the resource</h1>
          <p className="p">Please fill in the details below so we can get in touch with you</p>
          <form className="basic-form-details" action="mailto:info@nubeero.com">
            <label htmlFor="name">What role would you like to hire ?</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Enter the role would you like to hire ?" required />
            <br />
            <label htmlFor="address">What skill are you looking out for ?</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Select the skills required" required />
            <br />
            <label htmlFor="text">What job type ?</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Select the job type " required />
            <br />
            <label htmlFor="text">What level of experience are you looking for ?</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Select the experience level you need" required />
          </form>
          <div className=" mt-8 mb-8 flex w-[350px] items-center justify-between">
            <input className="w-[20px] h-[20px] " type="checkbox" required />
            <label className="text-[#00325c] text-[14px]" htmlFor="privacy and Terms">
              <span onClick={() => setTermsClick(true)} className=" hover:underline cursor-pointer hover:text-[#0098db]">
                Terms and Conditions
              </span>
              ,
              <span onClick={() => setPrivacyClick(true)} className=" hover:underline cursor-pointer hover:text-[#0098db]">
                {"  "}
                Privacy Agreement
              </span>
              {"  "}
              polices
            </label>
          </div>
          <div className="basic-button mb-10">
            <div className="option-link">
              <Link to="/secondbasic">BACK</Link>
            </div>
            <div className="option-link ">
              <Link to="/resourcedetails">SUBMIT</Link>
            </div>
          </div>
        </div>
      </div>
      {termsClick && <TermsAndCondition handleTermsClose={handleTermsClose} />}
      {privacyClick && <PrivacyPolicy handlePolicyClose={handlePolicyClose} />}
    </>
  );
}

export default ResourcesForBasicInfo;
