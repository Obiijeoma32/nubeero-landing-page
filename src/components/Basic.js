import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import "../App.css";

function Basic() {
  return (
    <>
      <div className="flex basic-container">
        <div className="sidebar-basic">
          <SideBar />
        </div>
        <div className="basic-form">
          <h1>Let's start with your information</h1>
          <p>Please fill in the details below so we can get in touch with you</p>
          <form className="basic-form-details" action="mailto:info@nubeero.com">
            <label htmlFor="name">Full Name</label>
            <br />
            <input className="input" autoComplete="on" type="text" placeholder="Enter Name" />
            <br />
            <label htmlFor="address">Email Address</label>
            <br />
            <input className="input" autoComplete="on" type="email" placeholder="ex:janedoe000@mail.com" />
            <br />
            <label htmlFor="number">Phone Number</label>
            <br />
            <input className="input" autoComplete="on" type="number" placeholder="Enter Phone Number" />
          </form>
          <div className="basic-button">
            <div className="option-link1" style={{ paddingRight: "7rem", paddingTop: "0.5rem" }}>
              <Link to="/option">Back</Link>
            </div>
            <div className="option-link">
              <Link to="/email">NEXT STEP</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic;
