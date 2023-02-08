import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import WhatWe from "./components/WhatWe";
import Services from "./components/Services";
import Dashboard from "./components/Dashboard";
import Research from "./components/Research";
import Option from "./components/Option";
import ContactUs from "./components/ContactUs";
import Form from "./components/Form";
import SideBar from "./components/SideBar";
import Basic from "./components/Basic";
import Branding from "./components/Branding";
import Funding from "./components/Funding";
import Onboarding from "./components/Onboarding";

import ProjectBrief from "./components/ProjectBrief";
import Timeline from "./components/Timeline";
import Email from "./components/Email";
import Processing from "./components/Processing";
import SecondSideBar from "./components/SecondSideBar";
import ResourceDetails from "./components/ResourceDetails";
import SecondBasic from "./components/SecondBasic";
import ResourcesModal from "./components/ResourcesModal";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/resourcedetails/resourcemodal" element={<ResourcesModal />} />
            <Route path="/secondbasic" element={<SecondBasic />} />
            <Route path="/secondsidebar" element={<SecondSideBar />} />
            <Route path="/resourcedetails" element={<ResourceDetails />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/what" element={<WhatWe />} />
            <Route path="/service" element={<Services />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/option" element={<Option />} />
            <Route path="/form" element={<Form />} />
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="/email" element={<Email />} />
            <Route path="/processing" element={<Processing />} />
          </Routes>

          <Routes>
            <Route path="/basic" element={<Basic />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/project" element={<ProjectBrief />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;