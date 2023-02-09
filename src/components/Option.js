import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Option() {
  const [individual, setIndividual] = useState(false);
  const [business, setBusiness] = useState(false);

  return (
    <>
      <div className="dd-options">
        <div className="options-container">
          <div className="options-header-details">
            <h1>What best describes you ?</h1>
            <p className="p" style={{ color: "#0098db", fontSize: "18px" }}>
              Please let us know what type of business describes you
            </p>
            <h3>{/* intentional */}</h3>
          </div>
          <div className="option-list-container">
            <div
              onClick={() => {
                setBusiness(false);
                setIndividual(true);
              }}
              className={`mt-12 ${individual === true && "border border-[#0098db] text-[#0098db]"} option-list`}
            >
              <div className="option-icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18.75C17.5888 18.75 19.6875 16.6513 19.6875 14.0625C19.6875 11.4737 17.5888 9.375 15 9.375C12.4112 9.375 10.3125 11.4737 10.3125 14.0625C10.3125 16.6513 12.4112 18.75 15 18.75Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.375 4.6875H5.625C5.10723 4.6875 4.6875 5.10723 4.6875 5.625V24.375C4.6875 24.8928 5.10723 25.3125 5.625 25.3125H24.375C24.8928 25.3125 25.3125 24.8928 25.3125 24.375V5.625C25.3125 5.10723 24.8928 4.6875 24.375 4.6875Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.77161 25.3125C7.19694 23.4483 8.24269 21.7838 9.73759 20.5915C11.2325 19.3993 13.0879 18.75 15 18.75C16.9121 18.75 18.7676 19.3993 20.2625 20.5915C21.7574 21.7838 22.8031 23.4483 23.2284 25.3125"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="option-detail">
                <h2>Individual</h2>
                <p>Less than 2 in number</p>
              </div>
            </div>

            <div
              onClick={() => {
                setIndividual(false);
                setBusiness(true);
              }}
              className={`${business === true && "border border-[#0098db] text-[#0098db]"} option-list`}
            >
              <div className="option-icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.3125 8.4375H4.6875C4.16973 8.4375 3.75 8.85723 3.75 9.375V24.375C3.75 24.8928 4.16973 25.3125 4.6875 25.3125H25.3125C25.8303 25.3125 26.25 24.8928 26.25 24.375V9.375C26.25 8.85723 25.8303 8.4375 25.3125 8.4375Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.6875 8.4375V6.5625C19.6875 6.06522 19.49 5.58831 19.1383 5.23667C18.7867 4.88504 18.3098 4.6875 17.8125 4.6875H12.1875C11.6902 4.6875 11.2133 4.88504 10.8617 5.23667C10.51 5.58831 10.3125 6.06522 10.3125 6.5625V8.4375"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M3.75 20.625H26.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.75 13.125H26.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="option-detail2">
                <h2>Business or Company</h2>
                <p>A group more than 2 in number</p>
              </div>
            </div>
          </div>
          <div className="option-button">
            <div className="option-link">
              <Link to="/home">BACK</Link>
            </div>
            <div className="option-link">
              <Link to="/basic">NEXT STEP</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Option;
