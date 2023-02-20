import SecondSideBar from "./SecondSideBar";
import { Link } from "react-router-dom";
import "../App.css";

function ResourceDetails() {
  return (
    <>
      <div className="flex mt-4 basic-container">
        <div className="sidebar-basic">
          <SecondSideBar />
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
          <div className="basic-button mb-10">
            <div className="option-link">
              <Link to="/secondbasic">BACK</Link>
            </div>
            <div className="option-link ">
              <Link to="/resourcedetails/resourcemodal">NEXT STEP</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourceDetails;
