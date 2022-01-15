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

                        <ul className="custom-footer-section-ul">
                            <li className="custom-footer-section-li"><MdLocationPin color="#fff" />&nbsp;&nbsp;Mahaa Technology and business solutions SPC, Muscat , Sultanate of Oman.</li>
                            <li className="custom-footer-section-li"><BsTelephoneInboundFill color="#fff"/>&nbsp;&nbsp;+96871682777</li>
                            <li className="custom-footer-section-li"><MdEmail color="#fff"/>&nbsp;&nbsp;mahaa.oman@mibts.com</li>
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