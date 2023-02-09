import { Link } from "react-router-dom";
import Man from "./Man";
import "../App.css";

function Home() {
  return (
    <>
      <div className="dd">
        <div className="dashboard-container ">
          <div className="dashboard-intro">
            <h1>Intermediation, Tech Solutions & Consulting</h1>
            <p>Nubeero is a consultancy and technology intermediation service provider that also offers services in software developement</p>
            <div className="home-link">
              <Link to="/option">GET STARTED</Link>
            </div>
          </div>
          <Man />
        </div>
      </div>
    </>
  );
}

export default Home;
