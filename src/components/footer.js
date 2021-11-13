// imports
import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <div className="custom-footer-container">
                <div className="custom-footer-section-container">
                    <div className="custom-footer-section">
                        <h3 className="custom-footer-section-header">Quick Links</h3>

                        <ul className="custom-footer-section-ul">
                            <li className="custom-footer-section-li">Home</li>
                            <li className="custom-footer-section-li">What We Do</li>
                            <li className="custom-footer-section-li">Services</li>
                            <li className="custom-footer-section-li">Contact Us</li>
                        </ul>
                    </div>
                    <div className="custom-footer-section">
                        <h3 className="custom-footer-section-header">Visit Us</h3>

                        <ul className="custom-footer-section-ul">
                            <li className="custom-footer-section-li">46,thandavan Street, Purasawalkam</li>
                            <li className="custom-footer-section-li">Chennai, Tamil Nadu, 600007.</li>
                            <li className="custom-footer-section-li">04426428312</li>
                        </ul>
                    </div>
                </div>

                <hr className="custom-footer-divider" />

                <h3 className="custom-footer-copyrights">
                    COPYRIGHTS © COMPANY NAME. 2021.ALL RIGHTS RESERVED.
                </h3>
            </div>
        )
    }

}

export default Footer;