// imports
import React from "react";
import {AiFillHome} from "react-icons/ai";
import {IoCall} from "react-icons/io5";
import {FaHandsHelping, FaTools} from "react-icons/fa";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDropdown: false,
        }
    }

    render() {

        const { showDropdown } = this.state;

        return (
            <>
                <nav className="custom-navbar">
                    <div className="custom-navbar-container">
                        <div className="custom-navbar-icon-container">
                            <p className="custom-navbar-logo-text">
                                LOGO HERE
                            </p>
                        </div>
                        <ul className="custom-navbar-content-container-ul">
                            <li
                                className="custom-navbar-content-container-li custom-navbar-active"
                                onMouseEnter={() => this.setState({showDropdown: false})}
                            >
                                <AiFillHome />&nbsp;Home
                            </li>
                            <li
                                className="custom-navbar-content-container-li"
                                onMouseEnter={() => this.setState({showDropdown: false})}
                            >
                                <FaHandsHelping />&nbsp;What we do
                            </li>
                            <li
                                className="custom-navbar-content-container-li"
                                onMouseEnter={() => this.setState({showDropdown: true})}
                            >
                                <FaTools />&nbsp;Services
                            </li>
                            <li
                                className="custom-navbar-content-container-li"
                                onMouseEnter={() => this.setState({showDropdown: false})}
                            >
                                <IoCall />&nbsp;Contact Us
                            </li>
                        </ul>
                    </div>
                </nav>
                {
                    (showDropdown === true) &&
                    (
                        <div
                            className="custom-services-dropdown-container"
                            onMouseLeave={() => this.setState({showDropdown: false})}
                        >
                            <ul className="custom-services-dropdown-container-ul">
                                <li className="custom-services-dropdown-container-li">
                                    Service 1
                                </li>
                                <li className="custom-services-dropdown-container-li">
                                    Service 2
                                </li>
                                <li className="custom-services-dropdown-container-li">
                                    Service 3
                                </li>
                            </ul>
                        </div>
                    )
                }
            </>
        )
    }
}

export default Header;