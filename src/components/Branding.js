import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import BrandingComponent from "./BrandingComponent";
import "../App.css";

function Branding() {
  const [page, setPage] = useState(false);
   const [others, setOthers] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [builtProductBefore, setBuiltProductBefore] = useState("");
  const [bestAppliesToYou, setBestAppliesToYou] = useState("");
  const [servicesInNeedOf, setServiceInNeedOf] = useState("");
  const [otherMessage, setOtherMessage] = useState("")

 
const handleMessage = (event) => {
  setOtherMessage(event.target.value);
  handleServicesInNeedOf();
};
  const handleBuiltProductBefore = (event) => {
    setBuiltProductBefore(event.target.value);
  };

   const handleBestAppliesToYou = (event) => {
     setBestAppliesToYou(event.target.value);
   };

     const handleServicesInNeedOf = (event) => {
       const { value, checked } = event.target;
       if (checked) {
         setServiceInNeedOf([...servicesInNeedOf, value]);
       } else {
         setServiceInNeedOf(servicesInNeedOf.filter((v) => v !== value));
       }
     };

  const handleSaveClick = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        builtProductBefore: builtProductBefore,
        bestAppliesToYou:
          builtProductBefore === "Yes" ? bestAppliesToYou : null,
        servicesInNeedOf:
          builtProductBefore === "Yes" ? servicesInNeedOf : null,
      }),
    };

    console.log(requestOptions);

    fetch(
      `https://nubeerobackend.onrender.com/basicInfo/${id}/branding`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.responsecode);

        window.location.href = "/funding?id=" + id;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


    function handleOthers() {
      setOthers((current) => !current);
    }
  return (
    <>
      <div className="branding-container flex">
        <div className="branding-sidebar">
          <SideBar />
        </div>
        <div className="branding-details">
          <h1>Branding</h1>
          <p className="p">
            Please fill in the details below so we can get in touch with you
          </p>

          <div className="branding-form">
            <form autoComplete="on" action="mailto:info@nubeero.com">
              <h2>Have you ever built a digital product/service before?</h2>
              <p>
                This consists of being actively involved in the design,
                development or launch process of any website/application.
              </p>
              <span>
                <input
                  id="yes"
                  name="options"
                  value="Yes"
                  onClick={() => setPage(true)}
                  type="radio"
                  onChange={handleBuiltProductBefore}
                />
                <label htmlFor="yes">Yes</label>
              </span>
              <br />
              <span className="form-no">
                <input
                  id="no"
                  name="options"
                  value="No"
                  onClick={() => setPage(false)}
                  type="radio"
                  onChange={handleBuiltProductBefore}
                />
                <label htmlFor="no">No</label>
              </span>

              <br />
            </form>
            {page && (
              <div>
                <h2 className="mb-6">
                  Which of the following best applies to you?{" "}
                </h2>
                <span>
                  <input
                    onChange={handleBestAppliesToYou}
                    id="product"
                    name="options"
                    value="I am a startup looking to build a new product"
                    type="radio"
                  />
                  <label htmlFor="product">
                    I am a startup looking to build a new product
                  </label>
                </span>
                <br />
                <span className="form-no">
                  <input
                    onChange={handleBestAppliesToYou}
                    id="business"
                    name="options"
                    value="I am an existing business looking to build a new product"
                    type="radio"
                  />
                  <label htmlFor="product">
                    I am an existing business looking to build a new product
                  </label>
                </span>
                <br />
                <span className="form-no">
                  <input
                    onChange={handleBestAppliesToYou}
                    id="existing"
                    name="options"
                    value="I am an existing business looking to enhance an existing
                    product"
                    type="radio"
                  />
                  <label htmlFor="product">
                    I am an existing business looking to enhance an existing
                    product
                  </label>
                </span>
                <br />
                <h2>Which of these services are you in need of?</h2>
                <p>
                  Kindly select one or more services you want us to provide.
                </p>
                <span>
                  <input
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={"Branding Service (Design, Identity and Awareness)"}
                  />
                  <label htmlFor="branding services">
                    Branding Service (Design, Identity and Awareness)
                  </label>
                </span>
                <br />
                <span>
                  <input
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={"Mobile App (Design and Development)"}
                  />
                  <label htmlFor="mobile app">
                    Mobile App (Design and Development)
                  </label>
                </span>
                <br />
                <span>
                  <input
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={
                      "  Digital Marketing or Social Media Management (Service and Graphic Design Retainership)"
                    }
                  />
                  <label htmlFor="Digital marketing">
                    Digital Marketing or Social Media Management (Service and
                    Graphic Design Retainership)
                  </label>
                </span>
                <br />
                <span>
                  <input
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={
                      "Graphic Design For Promotional Campaigns, App Store Assets etc (One-time Service)"
                    }
                  />
                  <label htmlFor="Graphic design">
                    Graphic Design For Promotional Campaigns, App Store Assets
                    etc (One-time Service)
                  </label>
                </span>
                <br />
                <span>
                  <input
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={"UI/UX Only ( User Story, Plan and Design )"}
                  />
                  <label htmlFor="ui/ux">
                    UI/UX Only ( User Story, Plan and Design )
                  </label>
                </span>
                <br />
                <span>
                  <input
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={"Content Creation (Audio, Visual), Copy Writing"}
                  />
                  <label htmlFor="content creation">
                    Content Creation (Audio, Visual), Copy Writing
                  </label>
                </span>
                <br />
                <span>
                  <input
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={
                      "Software Development (Improving, Rebuilding, Maintenance)"
                    }
                  />
                  <label htmlFor="software development">
                    Software Development (Improving, Rebuilding, Maintenance)
                  </label>
                </span>
                <br />
                <span>
                  <span className="mb-3">
                    <input
                      type="checkbox"
                      onChange={handleServicesInNeedOf}
                      value={
                        "Product Branding, Strategy & Management ( Kindly select if you don't already have a a brand or a team for this)"
                      }
                    />
                  </span>
                  <label htmlFor="product branding">
                    Product Branding, Strategy & Management ( Kindly select if
                    you don't already have a a brand or a team for this)
                  </label>
                </span>
                <br />
                <span>
                  <input
                    onClick={handleOthers}
                    type="checkbox"
                    onChange={handleServicesInNeedOf}
                    value={otherMessage}
                  />
                  <label htmlFor="other">Others:</label>
                </span>
                <br />
              </div>
            )}
            {others && (
              <div className="brandingdialoguebox">
                <label htmlFor="message">Message:</label>
                <br />
                <textarea
                  placeholder="type of services"
                  onChange={handleMessage}
                />
              </div>
            )}
            {servicesInNeedOf}
            <div className="basic-button mt-12 mb-10">
              <div className="option-link">
                <Link to="/project">BACK</Link>
              </div>
              <div
                className="option-link"
                style={{ paddingTop: "14px" }}
                onClick={handleSaveClick}
              >
                NEXT STEP
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branding;
