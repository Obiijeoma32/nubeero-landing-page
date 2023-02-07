import { NavLink } from "react-router-dom";
import image from "./whatsapp.jpeg";
import { useState } from "react";
import "../App.css";

function Header({ children }) {
  const [menuNav, setMenuNav] = useState(false);
  const menuItem = [
    {
      path: "/home",
      name: "HOME",
    },
    {
      path: "/what",
      name: "WHAT WE DO",
    },
    {
      path: "/service",
      name: "SERVICES",
    },
    {
      path: "/research",
      name: "RESEARCH",
    },
    {
      path: "/contact",
      name: "CONTACT US",
    },
  ];
  function handleMenu() {
    setMenuNav((open) => !open);
  }
  return (
    <>
      <div className="header-container sm:w-[650]">
        <span className="sm:w-[300px] h-[60px] header-logo">
          <img className="sm:w-[250px] h-[60px]" src={image} alt="Nubeero Logo" />
        </span>

        <div className="hidden md:block ">
          {menuItem.map((item, index) => (
            <NavLink className="header-navlink " to={item.path} key={index}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div onClick={handleMenu} className="block sm:block mr-[10%] mt-1 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </div>
      {menuNav && (
        <div className=" sm:block  md:hidden flex justify-end mt-10 w-[150px] h-[220px]  ml-[520px]">
          <ul>
            {menuItem.map((item, index) => (
              <NavLink className="" to={item.path} key={index}>
                <li className=" mb-[12px]">{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
      <main>{children}</main>
    </>
  );
}

export default Header;
