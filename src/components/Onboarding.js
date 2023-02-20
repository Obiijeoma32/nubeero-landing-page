import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function Onboarding() {
  return (
    <>
      <div className="flex onboarding">
        <div className="onboarding-side-bar">
          <SideBar />
        </div>
        <div className="onboarding-container">
          <h1>Onboarding</h1>
          <p className="p">Please fill in the details below so we can get in touch with you</p>
          <div className="onboarding-form">
            <form autoComplete="on" action="mailto:info@nubeero.com">
              <label htmlFor="product">Project/Product Name</label>
              <br />
              <p>What do we refer your project as? E.g. "Beto App"</p>
              <br />
              <input className="inputform" type="text" placeholder="Enter here" required />
              <br />
              <label htmlFor="summary">Project Summary</label>
              <br />
              <p>General review or summary of what your project entails. E.g. "The Motivv App is aimed to bridge the gap between clients and designers" or " Uber but for bikes" or "Something like Facebook"</p>
              <br />
              <input className="inputform" type="text" placeholder="Enter here" required />
              <br />
              <label htmlFor="brief">Project Brief</label>
              <br />
              <p>Upload a more detailed documentation of your project if you have one. (You can add multiple files).</p>

              <div className="flex  file-field">
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

                <input type="file" name="file[]" id="attachment" accept=".doc,.xml,.xls,.pdf,.ppt" multiple required />
              </div>
              <label className=" " htmlFor="summary">
                Project Brief & Features
              </label>
              <br />
              <p>In the event of no file, kindly write your project brief.</p>
              <br />
              <input className="inputform" type="text" placeholder="Enter here" required />
              <br />
            </form>
            <div className="basic-button">
              <div className="option-link">
                <Link to="/basic">BACK</Link>
              </div>
              <div className="option-link">
                <Link to="/project">NEXT STEP</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
