import SideBar from "./SideBar";
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Basic() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFullName = (event) => {
    setFullName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSaveClick = async () => {



      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
        }),
      };

      // console.log(requestOptions);
      
      fetch(`https://nubeerobackend.onrender.com/basicInfo/`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
if (data != null){

          window.location.href = "/onboarding?id=" + data.dataId;
}
        })
        .catch((err) => {
          console.log(err.message);
        });
  
  };
  return (
    <>
      <div className="flex basic-container">
        <div className="sidebar-basic">
          <SideBar />
        </div>
        <div className="basic-form">
          <h1>Let's start with your information</h1>
          <p className="p">
            Please fill in the details below so we can get in touch with you
          </p>
          <form className="basic-form-details" action="mailto:info@nubeero.com">
            <label htmlFor="name">Full Name</label>
            <br />
            <input
              value={fullName}
              onChange={handleFullName}
              className="input"
              autoComplete="on"
              type="text"
              placeholder="Enter Name"
              required
            />
            <br />
            <label htmlFor="address">Email Address</label>
            <br />
            <input
              value={email}
              onChange={handleEmail}
              className="input"
              autoComplete="on"
              type="email"
              placeholder="ex:janedoe000@mail.com"
              required
            />
            <br />
            <label htmlFor="number">Phone Number</label>
            <br />
            <input
              value={phoneNumber}
              onChange={handlePhoneNumber}
              className="input"
              autoComplete="on"
              type="tel"
              placeholder="Enter Phone Number"
              required
            />
          </form>
          <div className="basic-button">
            <div className="option-link">
              <Link to="/option">BACK</Link>
            </div>
            <div className="option-link" onClick={handleSaveClick}>
              NEXT STEP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic;
