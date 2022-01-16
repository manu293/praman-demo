// imports
import React from "react";
import {AiFillHome} from "react-icons/ai";
import {SiProducthunt} from "react-icons/si";
import {IoCall} from "react-icons/io5";
import { FaTools} from "react-icons/fa";
import Logo from "../images/Logo.jpg";
import {GiHamburgerMenu} from "react-icons/gi";

class Header extends React.Component {

    render() {

        return (
            <>
                <nav className="custom-navbar">
                    <div className="custom-navbar-container">
                        <div className="custom-navbar-icon-container">
                            <img src={Logo} alt={"Logo"} className="custom-navbar-icon" />
                        </div>
                        <ul className="custom-navbar-content-container-ul">
                            <li
                                className="custom-navbar-content-container-li custom-navbar-active"
                            >
                                <AiFillHome />&nbsp;Home
                            </li>
                            <li
                                className="custom-navbar-content-container-li"
                            >
                                <SiProducthunt />&nbsp;Products
                            </li>
                            <li
                                className="custom-navbar-content-container-li"
                            >
                                <FaTools />&nbsp;Services
                            </li>
                            <li
                                className="custom-navbar-content-container-li"
                            >
                                <IoCall />&nbsp;Contact Us
                            </li>
                        </ul>

                        <div className="mobileIcon">
                            <GiHamburgerMenu size={25} />
                        </div>

                    </div>
                </nav>
            </>
        )
    }
}

export default Header;