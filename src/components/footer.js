// imports
import React from "react";
import {BsTelephoneInboundFill} from "react-icons/bs";
import {MdEmail, MdLocationPin} from "react-icons/md";

class Footer extends React.Component {

    render() {
        return (
            <div className="custom-footer-container">
                <div className="custom-footer-section-container">
                
                    <div className="custom-footer-section">
                        <h3 className="custom-footer-section-header">Quick Links</h3>

                        <ul className="custom-footer-section-ul">
                            <li className="custom-footer-section-li">Home</li>
                            <li className="custom-footer-section-li">Products</li>
                            <li className="custom-footer-section-li">Services</li>
                            <li className="custom-footer-section-li">Contact Us</li>
                        </ul>
                    </div>
                    <div className="custom-footer-section">
                        <h3 className="custom-footer-section-header">Visit Us</h3>

                        <ul className="contactUsSection">
                            <li className="contactUsListItem">
                                <div className="contactUsListItemIcon">
                                    <MdLocationPin size={22} color="#fff" />
                                </div>&nbsp;&nbsp;
                                <p className="footerListItemContent">Mahaa Technology & Business Solutions SPC, Sultanate of Oman.</p>
                            </li>
                            <li className="contactUsListItem">
                                <div className="contactUsListItemIcon">
                                    <BsTelephoneInboundFill size={22} color="#fff" />
                                </div>&nbsp;&nbsp;
                                <p className="footerListItemContent">+96871682777</p>
                            </li>
                            <li className="contactUsListItem">
                                <div className="contactUsListItemIcon">
                                    <MdEmail size={22} color="#fff" />
                                </div>&nbsp;&nbsp;
                                <p className="footerListItemContent"><a className="contactUsLink" href="mailto: mahaa.oman@mibts.com">mahaa.oman@mibts.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="custom-footer-divider" />

                <h3 className="custom-footer-copyrights">
                    {`COPYRIGHTS © Mahaa Technology & Business Solutions. ${new Date().getFullYear()}.ALL RIGHTS RESERVED.`}
                </h3>
            </div>
        )
    }

}

export default Footer;