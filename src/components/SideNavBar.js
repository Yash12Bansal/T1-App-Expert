import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SideBarData";
// import './Navbar.css';
import { IconContext } from "react-icons";
import insulinlog from "../img/syringe.png";
import bglog from "../img/blood-test.png";
import foodlog from "../img/food.png";
import file from "../img/medical-records.png";
import prediction from "../img/search.png";
import leftChevron from "../img/undo.png";
import home from "../img/home.png";

function SideNavBar(props) {
  const encryptEmailToUrl = (email) => {
    // Encode email address to Base64
    const encodedEmail = btoa(email);
    // URL-encode special characters in the encoded email
    const urlEncodedEmail = encodeURIComponent(encodedEmail);
    return urlEncodedEmail;
  };
  // const menuItemStyle = (option) => ({
  //   fontSize: "15px",
  //   color: selected === option ? "black" : "rgb(104, 170, 245)",

  //   width: "95%",
  //   height: "100%",
  //   display: "flex",
  //   // flexDirection: "row"
  //   // justifyContent: "space-between;
  //   alignItems: "center",
  //   // padding: " 0 10px",
  //   marginLeft: "0",
  //   marginRight: "0",
  //   margin: "0px",
  //   // padding: "0px",
  //   paddingLeft: "10px",
  //   borderRadius: "5px",
  //   borderStyle: "solid" ,
  //   borderColor: "rgb(23, 90, 179)" ,
  //   borderWidth: "1px",

  //   borderLeftStyle: "solid",
  //   borderLeftColor:  "rgb(23, 90, 179)",
  //   borderLeftWidth:"5px" ,
  //   // borderleft:"2px solid red",
  //   // borderleft: selected === option ? "2px solid rgb(104, 170, 245)" : "none",
  //   backgroundColor:  "whitesmoke" ,
  // }); // http://localhost:8080/

  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    console.log(pathname);
    return pathname === `/patient-details/${props.email}`;
  };
  //   const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    console.log("props.details");

    console.log(props.details);
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="navbarr">
          <Link to="#" className="menu-bars">
            {/* onClick={showSidebar} */}
        {/* <FaIcons.FaBars />
          </Link> 
        </div> */}

        <nav className="nav-menu-sidenav sidenavh">
          {/* onClick={showSidebar} */}
          <ul className="nav-menu-items">
            {/* <li className="navbar-toggle">
              <NavLink to="/" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li> */}
            {/* {SidebarData.map((item, index) => { */}
            {/* return ( */}
            <li className="nav-text">
              <NavLink to="/patients" className="back-button">
                {/* {FaIcons.FaArrowLeft} */}
                <img src={leftChevron} width={35} height={35} />
                <span className="back-button">Back</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink
                to={`/patient-details/${encryptEmailToUrl(props.details.email)}`}
                activeClassName="active-link"
                isActive={checkActive}
                state={{
                  details: props.details,
                }}
                end
              >
                <img src={home} width={35} height={35} />
                <span>Home</span>
              </NavLink>
            </li>

            <li className="nav-text">
              <NavLink
                to={`/patient-details/${encryptEmailToUrl(props.details.email)}/food`}
                activeClassName="active-link"
                isActive={checkActive}
                state={{
                  details: props.details,
                  foodProp: props.email,
                }}
                end
              >
                <img src={foodlog} width={35} height={35} />
                <span>Food</span>
              </NavLink>
            </li>
            <li className="nav-text">
            <NavLink
                to={`/patient-details/${encryptEmailToUrl(props.details.email)}/bg`}
                activeClassName="active-link"
                isActive={checkActive}
                state={{
                  details: props.details,
                  bgprop: props.email,
                }}
                end
              >
                <img src={bglog} width={35} height={35} />
                <span>Blood Glucose</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink
                to={`/patient-details/${encryptEmailToUrl(props.details.email)}/insulin`}
                activeClassName="active-link"
                // isActive={checkActive}
                state={{
                  details: props.details,
                  insulinProp: props.email,
                }}
              >
                <img src={insulinlog} width={35} height={35} />
                <span>Insulin</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink
                to={`/patient-details/${encryptEmailToUrl(props.details.email)}/formattedRecord`}
                activeClassName="active-link"
                // isActive={checkActive}
                state={{
                  details: props.details,
                  recordProp: props.email,
                }}
              >
                <img src={file} width={35} height={35} />
                <span>Formatted Record</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink
                to={`/patient-details/${encryptEmailToUrl(props.details.email)}/prediction`}
                activeClassName="active-link"
                // isActive={checkActive}
                state={{
                  details: props.details,
                  predProp: props.email,
                }}
              >
                <img src={prediction} width={35} height={35} />
                <span>Predictions</span>
              </NavLink>
            </li>

            {/* ); */}
            {/* })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNavBar;
