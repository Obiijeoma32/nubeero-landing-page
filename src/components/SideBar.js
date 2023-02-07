import { NavLink } from "react-router-dom";
import "../App.css";

function SideBar() {
  const menuItem = [
    {
      path: "/basic",
      name: "Basic Info",
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18.75C19.1421 18.75 22.5 15.3921 22.5 11.25C22.5 7.10786 19.1421 3.75 15 3.75C10.8579 3.75 7.5 7.10786 7.5 11.25C7.5 15.3921 10.8579 18.75 15 18.75Z" stroke="currentColor" strokeWidth="1.4" strokeMiterlimit="10" />
          <path
            d="M3.63159 25.3114C4.7842 23.3164 6.44153 21.6598 8.43708 20.508C10.4326 19.3563 12.6961 18.75 15.0002 18.75C17.3043 18.75 19.5678 19.3564 21.5633 20.5082C23.5588 21.6599 25.2161 23.3166 26.3687 25.3116"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/onboarding",
      name: "Onboarding",
      icon: (
        <div>
          <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.875 9.1875L14 16.6875L27.125 9.1875L14 1.6875L0.875 9.1875Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="28" height="10" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.875 0.875L14 8.375L27.125 0.875" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      path: "/project",
      name: "Project Brief",
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.125 13.125H20.625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.125 16.875H20.625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M24.375 4.6875H5.625C5.10723 4.6875 4.6875 5.10723 4.6875 5.625V24.375C4.6875 24.8928 5.10723 25.3125 5.625 25.3125H24.375C24.8928 25.3125 25.3125 24.8928 25.3125 24.375V5.625C25.3125 5.10723 24.8928 4.6875 24.375 4.6875Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9.375 4.6875V25.3125" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/branding",
      name: "Branding",
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.75 9.375H22.5V13.125" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.25 20.625H7.5V16.875" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M25.3125 5.625H4.6875C4.16973 5.625 3.75 6.04473 3.75 6.5625V23.4375C3.75 23.9553 4.16973 24.375 4.6875 24.375H25.3125C25.8303 24.375 26.25 23.9553 26.25 23.4375V6.5625C26.25 6.04473 25.8303 5.625 25.3125 5.625Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/funding",
      name: "Funding",
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.1875 7.5H2.8125C2.29473 7.5 1.875 7.91973 1.875 8.4375V21.5625C1.875 22.0803 2.29473 22.5 2.8125 22.5H27.1875C27.7053 22.5 28.125 22.0803 28.125 21.5625V8.4375C28.125 7.91973 27.7053 7.5 27.1875 7.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M20.625 7.5L28.125 14.0625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.625 22.5L28.125 15.9375" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.375 7.5L1.875 14.0625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.375 22.5L1.875 15.9375" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },

    {
      path: "/timeline",
      name: "Timeline",
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.625 21.5625V8.4375" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24.375 8.4375V21.5625" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.25 15V16.875" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 14.0625V16.875" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.75 13.125V16.875" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M25.3125 4.6875H4.6875C4.16973 4.6875 3.75 5.10723 3.75 5.625V7.5C3.75 8.01777 4.16973 8.4375 4.6875 8.4375H25.3125C25.8303 8.4375 26.25 8.01777 26.25 7.5V5.625C26.25 5.10723 25.8303 4.6875 25.3125 4.6875Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 21.5625V25.3125" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M15 29.0625C16.0355 29.0625 16.875 28.223 16.875 27.1875C16.875 26.152 16.0355 25.3125 15 25.3125C13.9645 25.3125 13.125 26.152 13.125 27.1875C13.125 28.223 13.9645 29.0625 15 29.0625Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3.75 21.5625H26.25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="sidebar-container">
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className={({ isActive }) => (isActive ? "sidebarclick" : "sidebar-span")}>
            <span>
              {item.icon}

              <h2 className="mr-8 sidebar-h2">{item.name}</h2>
            </span>
          </NavLink>
        ))}
      </div>
      {/* <main>{children}</main> */}
    </>
  );
}

export default SideBar;
