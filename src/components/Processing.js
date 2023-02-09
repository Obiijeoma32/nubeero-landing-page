import { Link } from "react-router-dom";
import Header from "./Header";
import game from "./round.svg";
import PartnerIcon from "./PartnerIcon";
import ContactUs from "./ContactUs";
import "../App.css";
import RRPage from "./RRPage";

function Processing() {
  return (
    <>
      <Header />
      <div className="dd">
        <div className="dashboard-container mb-[5%] ">
          <div className="dashboard-intro">
            {" "}
            <h1>Resource Outsourcing & Resource Placement</h1>
            <p> Outsource and place top talent for your organization to meet your business needs efficiently. Our team will help you find the right resources, whether it be short-term projects or long-term engagements.</p>
            <div className="home-link">
              <Link to="/rrpage">GET STARTED</Link>
            </div>
          </div>

          <img className="w-[488px] h-[488px] mr-[1%] " src={game} alt="world map" />
        </div>
      </div>
      <PartnerIcon />
      <RRPage />
      <ContactUs />
    </>
  );
}

export default Processing;
