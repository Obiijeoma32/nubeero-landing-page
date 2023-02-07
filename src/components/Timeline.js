import { Link } from "react-router-dom";
import "../App.css";
import SideBar from "./SideBar";

function Timeline() {
  return (
    <>
      <div className="timeline-container">
        <div className="timeline-sidebar">
          <SideBar />
        </div>
        <div className="timeline-details">
          <h1 className="pd-4">Timeline</h1>
          <p>Please fill in the details below so we can get in touch with you</p>
          <h4>{/* intentional */}</h4>
          <div className="timeline-form">
            <form action="mailto:info@nubeero.com">
              <h2>How soon would you like this project to commence?</h2>
              <p>What is your expected start date?</p>
              <div className="div">
                <input type="date" placeholder="mm/dd/yyyy" />
              </div>
              <h2>When would you like this project to be completed?</h2>
              <p>What is your expected end date?</p>
              <div className="div">
                <input type="date" placeholder="mm/dd/yyyy" />
              </div>
            </form>
            <div className="basic-button mt-12 mb-10">
              <div className="option-link1" style={{ paddingRight: "7rem", paddingTop: "0.5rem" }}>
                <Link to="/funding">Back</Link>
              </div>
              <div className="option-link" style={{ paddingTop: "14px" }}>
                <Link to="/timeline">SUBMIT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
