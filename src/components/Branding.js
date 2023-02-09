import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import BrandingComponent from "./BrandingComponent";
import "../App.css";

function Branding() {
  const [page, setPage] = useState(false);
  return (
    <>
      <div className="branding-container flex">
        <div className="branding-sidebar">
          <SideBar />
        </div>
        <div className="branding-details">
          <h1>Branding</h1>
          <p className="p">Please fill in the details below so we can get in touch with you</p>

          <div className="branding-form">
            <form autoComplete="on" action="mailto:info@nubeero.com">
              <h2>Have you ever built a digital product/service before?</h2>
              <p>This consists of being actively involved in the design, development or launch process of any website/application.</p>
              <span>
                <input id="yes" name="options" value="Yes" onClick={() => setPage(true)} type="radio" />
                <label htmlFor="yes">Yes</label>
              </span>
              <br />
              <span className="form-no">
                <input id="no" name="options" value="No" onClick={() => setPage(false)} type="radio" />
                <label htmlFor="no">No</label>
              </span>
              <br />
            </form>
            {page && <BrandingComponent closeModal={setPage} />}
            <div className="basic-button mt-12 mb-10">
              <div className="option-link">
                <Link to="/project">BACK</Link>
              </div>
              <div className="option-link" style={{ paddingTop: "14px" }}>
                <Link to="/funding">NEXT STEP</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
