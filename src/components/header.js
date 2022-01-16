// imports
import React from "react";
import {AiFillHome} from "react-icons/ai";
import {SiProducthunt} from "react-icons/si";
import {IoCall} from "react-icons/io5";
import { FaTools} from "react-icons/fa";
import Logo from "../images/Logo.jpg";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";
import MobileLogo from "../images/mobileLogo.jpg"

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showMobileNavbar: false,
        }
    }

    onPress = (e) => {
        e.preventDefault();

        const target = window.document.getElementById(
          e.currentTarget.href.split("#")[1]
        );

        if (target) {
          const headerOffset = 20;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition - headerOffset;
    
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
        }

        this.setState({showMobileNavbar: false})
    };
    

    render() {

        return (
            <>

                {
                    (this.state.showMobileNavbar === true) ?
                        (
                            <div className="mobileContainer">

                                <div className="mobileIconContainer">
                                        <div className="mobileContainerLogo">
                                            <img
                                                src={MobileLogo}
                                                alt="Logo"
                                                width="90%"
                                                height="50px"
                                            />
                                        </div>

                                    <div
                                        className="mobileContainerClose"
                                        onClick={() => this.setState({showMobileNavbar: false})}
                                    >
                                        <IoMdClose size={30} color="#000" />
                                    </div>
                                </div>

                                <div className="mobileNavigationContainer">

                                    <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#home"}>
                                        <div className="mobileNavigationDivider" data-to-scrollspy-id="home">
                                            <AiFillHome size={20} color="#000" className="mobileNavigationDividerIcon" />
                                            <label className="mobileNavigationDividerLabel">
                                                Home
                                            </label>
                                        </div>
                                    </a>

                                    <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#products"}>
                                        <div className="mobileNavigationDivider" data-to-scrollspy-id="products">
                                            <SiProducthunt size={20} color="#000" className="mobileNavigationDividerIcon" />
                                            <label className="mobileNavigationDividerLabel">
                                                Products
                                            </label>
                                        </div>
                                    </a>

                                    <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#services"}>
                                        <div className="mobileNavigationDivider" data-to-scrollspy-id="services">
                                            <FaTools size={20} color="#000" className="mobileNavigationDividerIcon" />
                                            <label className="mobileNavigationDividerLabel">
                                                Services
                                            </label>
                                        </div>
                                    </a>
                                    
                                    <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#contactUs"}>
                                        <div className="mobileNavigationDivider" data-to-scrollspy-id="contactUs">
                                            <IoCall size={20} color="#000" className="mobileNavigationDividerIcon" />
                                            <label className="mobileNavigationDividerLabel">
                                                Contact Us
                                            </label>
                                        </div>
                                    </a>    
                            
                                </div>

                            </div>
                        )
                    :
                        (
                            <nav className="custom-navbar">
                                <div className="custom-navbar-container">
                                    <div className="custom-navbar-icon-container">
                                        <img src={Logo} alt={"Logo"} className="custom-navbar-icon" />
                                    </div>
                                    <ul className="custom-navbar-content-container-ul">
                                        <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#home"}>
                                            <li
                                                data-to-scrollspy-id="home"
                                                className="custom-navbar-content-container-li custom-navbar-active"
                                            >
                                                <AiFillHome />&nbsp;Home
                                            </li>
                                        </a>
                        
                                        <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#products"}>
                                            <li
                                                data-to-scrollspy-id="products"
                                                className="custom-navbar-content-container-li"
                                            >
                                                <SiProducthunt />&nbsp;Products
                                            </li>
                                        </a>
                                        
                                        <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#services"}>
                                            <li
                                                className="custom-navbar-content-container-li"
                                            >
                                                <FaTools />&nbsp;Services
                                            </li>
                                        </a>
                                        
                                        <a className="contactUsLink" onClick={(e) => this.onPress(e)} href={"#contactUs"}>
                                            <li
                                                className="custom-navbar-content-container-li"
                                            >
                                                <IoCall />&nbsp;Contact Us
                                            </li>
                                        </a>
                                        
                                    </ul>

                                    <div className="mobileIcon" onClick={() => this.setState({showMobileNavbar: true})}>
                                        <GiHamburgerMenu size={25} />
                                    </div>

                                </div>
                            </nav>
                        )
                }
            </>
        )
    }
}

export default Header;