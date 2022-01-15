// imports
import React from "react";
import {BsTelephoneInboundFill} from "react-icons/bs";
import {MdEmail, MdLocationPin} from "react-icons/md";

class ContactUs extends React.PureComponent {

    render() {
        return (
            <div className="whoarewe-container">
                <p className="whoarewe-header-text">
                    Contact Us
                </p>
                <hr />

                <div className="contactUsSectionContainer">
                    <div className="contactUsSectionSubContainer">
                        <p className="whoarewe-content">
                            <ul className="contactUsSection">
                                <li><MdLocationPin color="#000" />&nbsp;&nbsp;Mahaa Technology and business solutions SPC</li>
                                <li className="contactUsAddress">#204-01,2nd Floor, Tamimah Building, Al Nahdah Road , Al Wattayah,</li>
                                <li className="contactUsAddress">PO Box- 395, PC- 118  - Muscat , Sultanate of Oman</li> <br/>
                                <li ><BsTelephoneInboundFill color="#000"/>&nbsp;&nbsp;+96871682777</li><br/>
                                <li ><MdEmail color="#000"/>&nbsp;&nbsp;<a className="contactUsLink" href="mailto: mahaa.oman@mibts.com">mahaa.oman@mibts.com</a></li>
                            </ul>
                        </p>
                    </div>

                    <div className="contactUsSectionSubContainer">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484.1858876518507!2d58.51424937472111!3d23.601294258132175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f8b9922b18a3%3A0x53785a16880c9b85!2sRegus%20-%20Muscat%2C%20Al%20Wattayah!5e0!3m2!1sen!2sin!4v1642260072527!5m2!1sen!2sin"
                            width="600"
                            height="250"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        )
    }

}

export default ContactUs;