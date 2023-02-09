import { Link } from "react-router-dom";
import img from "./Content/Image.png";
import group from "./Content/groupofwomen.png";
import "../App.css";

function RRPage() {
  return (
    <>
      <div>
        <div className="services-container">
          <div className="services-header ">
            <h1>Innovative solutions for Resourcing</h1>
            <p>Unlock the potential of your organization with innovative solutions for resourcing. Our team offers cutting-edge approaches to meet your unique business needs and drive success.</p>
          </div>
          <div className="flex services-body1 ">
            <div className=" mt-20 services-content">
              <p className=" text-[12px]">For Recruiters</p>
              <h2 className="h2 ">Build Amazing Teams</h2>
              <p className=" w-[520px]">
                Enhance the capabilities of your organization with top talent from the tech industry. Our team specializes in tech outsourcing, providing innovative solutions to help you build amazing teams that drive success and achieve your
                business goals. Whether you need resources for short-term projects or long-term engagements, we have the expertise to help you find the right fit and build a team that exceeds expectations.{" "}
              </p>
              <div className="w-32 mt-4 text-[#00325c]  ">
                <Link className=" items-center justify-between flex processing-company" to="/secondbasic">
                  Get Started
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
          <div className="flex mt-[12%]  services-body">
            <img src={img} alt="overview" />
            <div className="services-content">
              <p className=" text-[12px] mt-[-14px]">For Resources</p>
              <h1 className="text-[#00325c]">Get Job Placement Without Stress</h1>
              <p>
                Simplify your job search with our tech outsourcing services. Our team takes the stress out of finding your next job by providing you with personalized support and innovative solutions to get you placed in your dream role. Whether
                you're looking for short-term projects or long-term engagements, we have the resources and expertise to help you reach your goals.{" "}
              </p>
              <div className="w-32 mt-4 text-[#00325c]  ">
                <Link className=" items-center justify-between flex processing-company" to="/resourcedetails">
                  Get Started
                  <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RRPage;
