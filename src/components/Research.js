import graph from "./graph.png";
import group from "./group.png";

function Research() {
  return (
    <>
      <div id="research" className="  research-box-container">
        <div className="flex research-container">
          <div className="research-details">
            <h3>RESEARCH & ANALYTICS</h3>
            <h1 style={{ color: "#F2994A" }}>
              AI <span style={{ color: "#00325c" }}>Powered Platform</span>
            </h1>
            <p>
              Our research also focuses on engineering our AI platform to address the need to build the public trust in the local insurance landscape by providing simplified consumer education and gather feedback from customers for continuous
              improvement.
            </p>
          </div>
          <img src={graph} alt="request" />
        </div>
        <div className="flex  research-insurtech">
          <img src={group} alt="stakeholders" />
          <div className="insurtech-details">
            <h1>Insurtech</h1>
            <p>
              Our Insurtech product is an easy to use platform for getting various types of insurance cover ranging from Motor, Accident, Health, Life insurance and other types. We choose the best available insurance products from various trusted
              Insurance partners and provide the avenue to book new Policies, Cancel existing Policies, renew expired policies and view general policy information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
