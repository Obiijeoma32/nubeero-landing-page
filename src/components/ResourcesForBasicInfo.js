import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import SecondBasicSideBar from "./SecondBasicSideBar";
import TermsAndCondition from "./TermsAndCondition";
import PrivacyPolicy from "./PrivacyPolicy";
import "../App.css";

const options = [
  { value: "Software Dev Engineer ", label: "Software Dev Engineer (Artificial Intelligence, Machine Learning, and Blockchain)" },
  { value: "Sre", label: "Site Reliability Engineer (SRE's)" },
  { value: "data", label: "Data Engineers/Analysis" },
  { value: "cloud", label: "Cloud/Data Architects" },
  { value: "developers", label: "Full Stack Developers" },
  { value: "ce", label: "Cloud Engineers" },
  { value: "DE", label: "Data Engineers" },
  { value: "security", label: "Security Architects/Cyber Security Analyist" },
  { value: "Db", label: "Database Administrators" },
  { value: "BA", label: "Business Analysis" },
  { value: "ST", label: "Software Testers" },
  { value: "devops", label: "Devops Engineer" },
  { value: "PM", label: "Product Manager" },
  { value: "ui/ux", label: "User Interface (UI)/User Experience (UX) Designer" },
];
const years = [
  { value: "oneYear", label: " Less than 1 year" },
  { value: "two", label: "1 year but less than 2 years" },
  { value: "three", label: "2 years but less than 3 years" },
  { value: "four", label: "3 years but less than 4 years" },
  { value: "five", label: "4 years but less than 5 years" },
  { value: "six", label: "5 years but less than 10 years" },
  { value: "seven", label: "10 years and above" },
];
const jobType = [
  { value: "full", label: " Full Time (On-site)" },
  {
    value: "fulltime",
    label: " Full Time (Remote)",
  },
  { value: "part", label: " Part Time (On-site)" },
  { value: "part-remote", label: " Part Time (Remote)" },
];
const jobRole = [
  { value: "entry", label: "Entry Level" },
  { value: "junior", label: "Junior Level" },
  { value: "inter", label: "Intermediate Level" },
  { value: "senior", label: "Senior Level" },
];
const customStyles = {
  control: (base) => ({
    ...base,
    height: 60,
    minHeight: 60,
  }),
};
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
            <Select placeholder="Select the role you would like to hire" styles={customStyles} className="w-[670px] mt-[10px] text-[#00325c] outline-none " options={jobRole} />
            <br />
            <label htmlFor="address">What skill are you looking out for ?</label>
            <br />
            <Select placeholder="Select the skills required" styles={customStyles} className="w-[670px] mt-[10px] text-[#00325c] outline-none " options={options} />
            <br />
            <label htmlFor="text">What job type ?</label>
            <br />
            <Select placeholder="Select the job type" styles={customStyles} className="w-[670px]   mt-[10px] text-[#00325c] outline-none " options={jobType} />
            <br />
            <label htmlFor="text">What level of experience are you looking for ?</label>
            <br />
            <Select placeholder="Select the experience level you need" styles={customStyles} className="w-[670px] mt-[10px] text-[#00325c] outline-none " options={years} />
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
