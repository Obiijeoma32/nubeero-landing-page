import { Link } from "react-router-dom";
import "../App.css";
import SecondSideBar from "./SecondSideBar";

function ResourcesModal() {
  return (
    <>
      <div className="project-container flex">
        <div className="project-sidebar">
          <SecondSideBar />
        </div>
        <div className="project-brief">
          <h1>Kindly fill in the details</h1>
          <p className="p">Please fill in the details below so we can get in touch with you</p>

          <form className="basic-form-details mt-10" action="mailto:info@nubeero.com">
            <label htmlFor="name">What is your job role</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Enter the role would you like to be hired ?" />
            <br />
            <label htmlFor="name">What is your expertise level</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Select your expertise level" />
            <br />
            <label htmlFor="name">How many years of experience do you have in this field ?</label>
            <br />
            <input className="input" autoComplete="on" type="number" placeholder="Enter years of experience" />
            <br />
            <label htmlFor="name">Give a brief description about yourself</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Describe your top skills, strengths, and experiences." />
            <br />
            <label htmlFor="name">Please share your cv and any relevant document</label>
            <br />
            <p className=" text-[#0098db]  text-[14px] mt-1 ">You can share attach up to 5 files, preferably in PDF</p>
            <div className="flex file-field">
              <span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.04688 5.76485L9 2.8125L11.9531 5.76485" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 10.6874V2.81445" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M15.1875 10.6875V14.625C15.1875 14.7742 15.1282 14.9173 15.0227 15.0227C14.9173 15.1282 14.7742 15.1875 14.625 15.1875H3.375C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V10.6875"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input type="file" name="file[]" id="attachment" accept=".doc,.xml,.xls,.pdf,.ppt" multiple />
            </div>
          </form>
          <div className="basic-button mt-12 mb-10">
            <div className="option-link1" style={{ paddingRight: "7rem", paddingTop: "0.5rem" }}>
              <Link to="/resourcedetails">Back</Link>
            </div>
            <div className="option-link" style={{ paddingTop: "14px" }}>
              <Link to="/">SUBMIT</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourcesModal;