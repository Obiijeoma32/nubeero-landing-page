import { useState } from "react";
import BrandingDialogueBox from "./BrandingDialogueBox";
import "../App.css";

function BrandingComponent({ closeModal }) {
  const [others, setOthers] = useState(false);

  function handleOthers() {
    setOthers((current) => !current);
  }

  return (
    <>
      <div>
        <h2 className="mb-6">Which of the following best applies to you? </h2>
        <span>
          <input id="product" name="options" value="startup" type="radio" />
          <label htmlFor="product">I am a startup looking to build a new product</label>
        </span>
        <br />
        <span className="form-no">
          <input id="business" name="options" value="business" type="radio" />
          <label htmlFor="product">I am an existing business looking to build a new product</label>
        </span>
        <br />
        <span className="form-no">
          <input id="existing" name="options" value="existing" type="radio" />
          <label htmlFor="product">I am an existing business looking to enhance an existing product</label>
        </span>
        <br />
        <h2>Which of these services are you in need of?</h2>
        <p>Kindly select one or more services you want us to provide.</p>
        <span>
          <input type="checkbox" />
          <label htmlFor="branding services">Branding Service (Design, Identity and Awareness)</label>
        </span>
        <br />
        <span>
          <input type="checkbox" />
          <label htmlFor="mobile app">Mobile App (Design and Development)</label>
        </span>
        <br />
        <span>
          <input type="checkbox" />
          <label htmlFor="Digital marketing">Digital Marketing or Social Media Management (Service and Graphic Design Retainership)</label>
        </span>
        <br />
        <span>
          <input type="checkbox" />
          <label htmlFor="Graphic design">Graphic Design For Promotional Campaigns, App Store Assets etc (One-time Service)</label>
        </span>
        <br />
        <span>
          <input type="checkbox" />
          <label htmlFor="ui/ux">UI/UX Only ( User Story, Plan and Design )</label>
        </span>
        <br />
        <span>
          <input type="checkbox" />
          <label htmlFor="content creation">Content Creation (Audio, Visual), Copy Writing</label>
        </span>
        <br />
        <span>
          <input type="checkbox" />
          <label htmlFor="software development">Software Development (Improving, Rebuilding, Maintenance)</label>
        </span>
        <br />
        <span>
          <span className="mb-3">
            <input type="checkbox" />
          </span>
          <label htmlFor="product branding">Product Branding, Strategy & Management ( Kindly select if you don't already have a a brand or a team for this)</label>
        </span>
        <br />
        <span>
          <input onClick={handleOthers} type="checkbox" />
          <label htmlFor="other">Others:</label>
        </span>
        <br />
      </div>
      {others && <BrandingDialogueBox />}
    </>
  );
}

export default BrandingComponent;
