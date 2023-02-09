import SecondSideBar from "./SecondSideBar";
import { Link } from "react-router-dom";
import "../App.css";

function SecondBasic() {
  return (
    <>
      <div className="flex mt-4 basic-container">
        <div className="sidebar-basic">
          <SecondSideBar />
        </div>
        <div className="basic-form">
          <h1>Let's start with your information</h1>
          <p className="p">Please fill in the details below so we can get in touch with you</p>
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
          <div className="basic-button mb-10">
            <div className="option-link">
              <Link to="/processing">BACK</Link>
            </div>
            <div className="option-link">
              <Link className="pt-2" to="/secondbasic/resourcemodal">
                NEXT STEP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondBasic;
