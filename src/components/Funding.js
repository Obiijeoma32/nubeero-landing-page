import { Link } from "react-router-dom";
import "../App.css";
import SideBar from "./SideBar";

function Funding() {
  return (
    <>
      <div className="funding-container">
        <div className="funding-sidebar">
          <SideBar />
        </div>
        <div className="funding-details ">
          <h1>Funding</h1>
          <p className="p">Please fill in the details below so we can get in touch with you</p>

          <div className="funding-form">
            <form autoComplete="on" action="mailto:info@nubeero.com">
              <h2>Have you acquired funding?</h2>
              <p>This implies that you currently have the funds readily available to pay for services you have made indication for</p>
              <span>
                <input id="yes" name="options1" value="Yes" type="radio" />
                <label htmlFor="yes">Yes</label>
              </span>
              <br />
              <span className="form-no">
                <input id="no" name="options1" value="No" type="radio" />
                <label htmlFor="no">No</label>
              </span>
              <br />
              <h2 className="mb-6">Which funding stage has your product gotten to ?</h2>
              <span>
                <input id="pre" name="options2" value="pre" type="radio" />
                <label htmlFor="pre">Pre-Seed Capital: - This is the earliest source of investment for your startup.</label>
              </span>
              <br />
              <span>
                <input id="seed" name="options2" value="Seed" type="radio" />
                <label htmlFor="seed">Seed, Startup Accelerators, or Angel Investor Funding</label>
              </span>
              <br />
              <span>
                <input id="series" name="options2" value="series" type="radio" />
                <label htmlFor="series">Series A Funding or Venture Capital Financing. </label>
              </span>
              <br />
              <span>
                <input id="mezzanine" name="options2" value="mezzanine" type="radio" />
                <label htmlFor="mezzanine">Mezzanine Financing & Bridge Loans. </label>
              </span>
              <br />
              <span>
                <input id="ipo" name="options2" value="ipo" type="radio" />
                <label htmlFor="ipo">IPO (Initial Public Offering) </label>
              </span>
              <br />
              <h2 className="mb-6">What is your estimated budget for this project ? </h2>
              <span>
                <input id="amount" name="options" value="Amount" type="radio" />
                <label htmlFor="amount">$500 Maximum.</label>
              </span>
              <br />
              <span>
                <input id="1000" name="options" value="1000" type="radio" />
                <label htmlFor="amount">$1,000 Maximum. </label>
              </span>
              <br />
              <span>
                <input id="1500" name="options" value="1500" type="radio" />
                <label htmlFor="amount">$1,500 Maximum. </label>
              </span>
              <br />
              <span>
                <input id="2500" name="options" value="2500" type="radio" />
                <label htmlFor="amount">$2,500 Maximum. </label>
              </span>
              <br />
              <span>
                <input id="3000" name="options" value="3000" type="radio" />
                <label htmlFor="amount">Over $3,000 </label>
              </span>
              <br />
              <span>
                <input id="decide" name="options" value="decide" type="radio" />
                <label htmlFor="amount">Decide Later</label>
              </span>
              <br />
            </form>
            <div className="basic-button mt-12 mb-10">
              <div className="option-link">
                <Link to="/branding">BACK</Link>
              </div>
              <div className="option-link" style={{ paddingTop: "14px" }}>
                <Link to="/timeline">NEXT STEP</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Funding;
