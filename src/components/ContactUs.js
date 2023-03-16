import { useState } from "react";
import NubeeroLogo from "./NubeeroLogo";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndCondition from "./TermsAndCondition";
import "../App.css";
import { Link } from "react-router-dom";

function ContactUs() {
  const [privacy, setPrivacy] = useState(false);
  const [terms, setTerms] = useState(false);

  function handlePolicyClose() {
    setPrivacy(false);
  }
  function handleTermsClose() {
    setTerms(false);
  }

  return (
    <>
      <div id="contact" className="contact-container">
        <div className="contact-body-container">
          <div className="contact-body">
            <h1>Reach out to us for any information</h1>
            <p>We are waiting to recieve your message drop us your email and we’d be sure to reach out. </p>
            <form autoComplete="on" className="contact-form" action="https://formsubmit.co/obiijeoma32@gmail.com" method="POST">
              <label htmlFor="name">Full Name</label>
              <br />
              <input className="contact-input" type="text" name="name" placeholder="Enter your first and last name" />
              <br />
              <label style={{ marginLeft: "3.5%" }} htmlFor="Email">
                Email Address
              </label>
              <br />
              <input className="contact-input" type="email" name="email" placeholder="Your Email" />
              <br />
              <label style={{ marginLeft: "-0.5%" }} htmlFor="message">
                Message
              </label>
              <br />
              <textarea name="message" placeholder="typing..." />
              <br />
              <button type="submit" value="send">
                SEND
              </button>
            </form>
            <p style={{ color: "#0098db", fontSize: "14px" }}>No spam. Only releases, updates and discounts</p>
          </div>
        </div>
        <div className="contact-footer">
          <div className="company-logo-container">
            <NubeeroLogo />
          </div>

          <p>Nubeero is a consultancy and technology intermediation service provider that also offers services in software development</p>
          <div className=" w-[900px] ">
            <h3>
              <span className=" cursor-pointer mr-[7px] hover:underline" onClick={() => setTerms(true)}>
                Terms and Conditions
              </span>
              <Link to="/contact" className="mr-[5px] hover:underline">
                Contact us
              </Link>

              <span className=" cursor-pointer  hover:underline" onClick={() => setPrivacy(true)}>
                {"  "}
                Privacy Agreement
              </span>
            </h3>
          </div>
          <div className="flex contact-footer-icon">
            <a href="https://web.facebook.com/nubeero?_rdc=1&_rdr" title="Facebook">
              <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.14971 3.29509H9.96139V0.139742C9.64884 0.0967442 8.5739 0 7.32201 0C4.70992 0 2.92057 1.643 2.92057 4.66274V7.44186H0.0380859V10.9693H2.92057V19.845H6.45462V10.9701H9.22052L9.65958 7.44269H6.4538V5.01251C6.45462 3.99297 6.72915 3.29509 8.14971 3.29509Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://twitter.com/nubeero" title="Twitter">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.9995 2.11613C21.1814 2.475 20.3096 2.71288 19.4008 2.82838C20.3358 2.27013 21.0494 1.39287 21.3849 0.3355C20.5131 0.85525 19.5506 1.22238 18.5249 1.42725C17.6971 0.545875 16.5174 0 15.2304 0C12.7334 0 10.7231 2.02675 10.7231 4.51137C10.7231 4.86888 10.7534 5.21263 10.8276 5.53988C7.07801 5.357 3.76014 3.55988 1.53126 0.82225C1.14214 1.49738 0.913887 2.27012 0.913887 3.102C0.913887 4.664 1.71826 6.04862 2.91726 6.85025C2.19264 6.8365 1.48176 6.62613 0.879512 6.29475C0.879512 6.3085 0.879512 6.32638 0.879512 6.34425C0.879512 8.536 2.44289 10.3565 4.49301 10.7759C4.12589 10.8763 3.72576 10.9244 3.31051 10.9244C3.02176 10.9244 2.73026 10.9079 2.45664 10.8474C3.04101 12.6335 4.69926 13.9466 6.67101 13.9893C5.13651 15.1896 3.18814 15.9129 1.07889 15.9129C0.709012 15.9129 0.354262 15.8964 -0.000488281 15.851C1.99739 17.1394 4.36514 17.875 6.91851 17.875C15.218 17.875 19.7555 11 19.7555 5.04075C19.7555 4.84137 19.7486 4.64887 19.739 4.45775C20.6341 3.8225 21.3863 3.02913 21.9995 2.11613Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/nubeero_ng/" title="Instagram">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.87451 0H15.1245C18.9209 0 21.9995 3.07862 21.9995 6.875V15.125C21.9995 18.9214 18.9209 22 15.1245 22H6.87451C3.07814 22 -0.000488281 18.9214 -0.000488281 15.125V6.875C-0.000488281 3.07862 3.07814 0 6.87451 0ZM15.1245 19.9375C17.7783 19.9375 19.937 17.7787 19.937 15.125V6.875C19.937 4.22125 17.7783 2.0625 15.1245 2.0625H6.87451C4.22076 2.0625 2.06201 4.22125 2.06201 6.875V15.125C2.06201 17.7787 4.22076 19.9375 6.87451 19.9375H15.1245Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.49951 11C5.49951 7.96263 7.96214 5.5 10.9995 5.5C14.0369 5.5 16.4995 7.96263 16.4995 11C16.4995 14.0374 14.0369 16.5 10.9995 16.5C7.96214 16.5 5.49951 14.0374 5.49951 11ZM7.56201 11C7.56201 12.8948 9.10476 14.4375 10.9995 14.4375C12.8943 14.4375 14.437 12.8948 14.437 11C14.437 9.10388 12.8943 7.5625 10.9995 7.5625C9.10476 7.5625 7.56201 9.10388 7.56201 11Z"
                  fill="currentColor"
                />
                <circle cx="16.9121" cy="5.08749" r="0.732875" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/nubeero/" title="Linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 16 16">
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {privacy && <PrivacyPolicy handlePolicyClose={handlePolicyClose} />}
      {terms && <TermsAndCondition handleTermsClose={handleTermsClose} />}
    </>
  );
}

export default ContactUs;
