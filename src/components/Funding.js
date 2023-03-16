import { Link } from "react-router-dom";
import "../App.css";
import SideBar from "./SideBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Funding() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [acquiredFunding, setAcquiredFunding] = useState("");
  const [fundingStage, setFundingStage] = useState("");
  const [budget, setBudget] = useState("");

  const handleAcquiredFunding = (event) => {
    setAcquiredFunding(event.target.value);
  };
  const handleFundingStage = (event) => {
    setFundingStage(event.target.value);
   
  };
  const handleBudget = (event) => {
    setBudget(event.target.value);
  };

  const handleSaveClick = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        acquiredFunding: acquiredFunding,
        fundingStage: fundingStage,
        budget: budget,
      }),
    };

    console.log(requestOptions);

    fetch(`http://localhost:8080/basicInfo/${id}/funding`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.responsecode);

        window.location.href = "/timeline?id=" + id;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="funding-container">
        <div className="funding-sidebar">
          <SideBar />
        </div>
        <div className="funding-details ">
          <h1>Funding</h1>
          <p className="p">
            Please fill in the details below so we can get in touch with you
          </p>

          <div className="funding-form">
            <form autoComplete="on" action="mailto:info@nubeero.com">
              <h2>Have you acquired funding?</h2>
              <p>
                This implies that you currently have the funds readily available
                to pay for services you have made indication for
              </p>
              <span>
                <input
                  id="yes"
                  name="options1"
                  value="Yes"
                  type="radio"
                  onChange={handleAcquiredFunding}
                />
                <label htmlFor="yes">Yes</label>
              </span>
              <br />
              <span className="form-no">
                <input
                  id="no"
                  name="options1"
                  value="No"
                  type="radio"
                  onChange={handleAcquiredFunding}
                />
                <label htmlFor="no">No</label>
              </span>
              <br />
              <h2 className="mb-6">
                Which funding stage has your product gotten to ?
              </h2>
              <span>
                <input
                  id="pre"
                  name="options2"
                  value="Pre-Seed Capital: - This is the earliest source of investment for your startup."
                  type="radio"
                  onChange={handleFundingStage}
                />
                <label htmlFor="pre">
                  Pre-Seed Capital: - This is the earliest source of investment
                  for your startup.
                </label>
              </span>
              <br />
              <span>
                <input
                  id="seed"
                  name="options2"
                  value=" Seed, Startup Accelerators, or Angel Investor Funding"
                  type="radio"
                  onChange={handleFundingStage}
                />
                <label htmlFor="seed">
                  Seed, Startup Accelerators, or Angel Investor Funding
                </label>
              </span>
              <br />
              <span>
                <input
                  id="series"
                  name="options2"
                  value="Series A Funding or Venture Capital Financing."
                  type="radio"
                  onChange={handleFundingStage}
                />
                <label htmlFor="series">
                  Series A Funding or Venture Capital Financing.{" "}
                </label>
              </span>
              <br />
              <span>
                <input
                  id="mezzanine"
                  name="options2"
                  value="Mezzanine Financing & Bridge Loans."
                  type="radio"
                  onChange={handleFundingStage}
                />
                <label htmlFor="mezzanine">
                  Mezzanine Financing & Bridge Loans.{" "}
                </label>
              </span>
              <br />
              <span>
                <input
                  id="ipo"
                  name="options2"
                  value="IPO"
                  type="radio"
                  onChange={handleFundingStage}
                />
                <label htmlFor="ipo">IPO (Initial Public Offering) </label>
              </span>
              <br />
              <h2 className="mb-6">
                What is your estimated budget for this project ?{" "}
              </h2>
              <span>
                <input
                  id="amount"
                  name="options"
                  value="$500 Maximum"
                  type="radio"
                  onChange={handleBudget}
                />
                <label htmlFor="amount">$500 Maximum.</label>
              </span>
              <br />
              <span>
                <input
                  id="1000"
                  name="options"
                  value="$1,000 Maximum"
                  type="radio"
                  onChange={handleBudget}
                />
                <label htmlFor="amount">$1,000 Maximum. </label>
              </span>
              <br />
              <span>
                <input
                  id="1500"
                  name="options"
                  value="$1,500 Maximum"
                  type="radio"
                  onChange={handleBudget}
                />
                <label htmlFor="amount">$1,500 Maximum. </label>
              </span>
              <br />
              <span>
                <input
                  id="2500"
                  name="options"
                  value="$2,500 Maximum"
                  type="radio"
                  onChange={handleBudget}
                />
                <label htmlFor="amount">$2,500 Maximum. </label>
              </span>
              <br />
              <span>
                <input
                  id="3000"
                  name="options"
                  value="Over $3,000"
                  type="radio"
                  onChange={handleBudget}
                />
                <label htmlFor="amount">Over $3,000 </label>
              </span>
              <br />
              <span>
                <input
                  id="decide"
                  name="options"
                  value="Decide Later"
                  type="radio"
                  onChange={handleBudget}
                />
                <label htmlFor="amount">Decide Later</label>
              </span>
              <br />
            </form>
           
            <div className="basic-button mt-12 mb-10">
              <div className="option-link">
                <Link to="/branding">BACK</Link>
              </div>
              <div className="option-link" style={{ paddingTop: "14px" }} onClick={handleSaveClick}>
                NEXT STEP
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Funding;
