import { Link } from "react-router-dom";
import image from "./Image.png";
import group from "./Content/Content/group.png";
import "../App.css";

function Services() {
  return (
    <>
      <div id="service">
        <div className="services-container">
          <div className="services-header ">
            <h1>Innovative solutions for Insurtech</h1>
            <p>Our AI powered platform manages the insurance portfolio of average citizens in these countries based on environmental risk factors</p>
          </div>
          <div className="flex w-400  services-body1 ">
            <div className=" mt-20 services-content">
              <h2 className="h2 ">Resource Outsourcing</h2>
              <p className=" w-[400px]">
                Discover the benefits of resource outsourcing with our expert team. Our service provides businesses with access to a diverse range of highly skilled professionals, enabling you to tap into expertise you may not have in-house. From IT
                support to marketing, financial management, and more, our outsourcing solutions are designed to meet your unique business needs.
              </p>
              <div className="w-32 mt-4 text-[#00325c]  ">
                <Link className=" items-center justify-between flex processing-company" to="/processing">
                  Learn More
                  <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img src={group} alt="overview" />
          </div>
          <div className="flex mt-20 services-body">
            <img src={image} alt="overview" />
            <div className="services-content">
              <h1 style={{ color: "#F2994A" }}>
                Omini Platform <span style={{ color: "#00325c" }}>to Manage Policies</span>
              </h1>
              <p>
                We pull disparate policies into one platform for management and monitoring, creating on-demand insurance for micro-events like borrowing a friend's car, and the adoption of the peer-to-peer model to both create customized group
                coverage and incentivize positive choices through group rebates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
