// imports
import React from "react";
import {BsTelephoneInboundFill} from "react-icons/bs";
import {MdEmail, MdLocationPin} from "react-icons/md";
import {Row, Col} from "react-bootstrap";

class ContactUs extends React.PureComponent {

    render() {
        return (
            <div className="whoarewe-container" id={this.props.id}>
                <p className="whoarewe-header-text">
                    Contact Us
                </p>
                <hr />

                <Row className="customContactUsSection">
                    <Col className="contactUsSectionContainer">
                        <ul className="contactUsSection">
                            <li className="contactUsListItem">
                                <div className="contactUsListItemIcon">
                                    <MdLocationPin size={22} color="#000" />
                                </div>&nbsp;&nbsp;
                                <p className="contactUsListItemContent">Mahaa Technology & Business Solutions SPC, Shop No -4, Building Number 173. Way number 54, Darvesh Building, Near Royal Hospital , Ghala Muscat , Sultanate of Oman.</p>
                            </li>
                            <li className="contactUsListItem">
                                <div className="contactUsListItemIcon">
                                    <BsTelephoneInboundFill size={22} color="#000" />
                                </div>&nbsp;&nbsp;
                                <p className="contactUsListItemContent">+96871682777</p>
                            </li>
                            <li className="contactUsListItem">
                                <div className="contactUsListItemIcon">
                                    <MdEmail size={22} color="#000" />
                                </div>&nbsp;&nbsp;
                                <p className="contactUsListItemContent"><a className="contactUsLink" href="mailto: mahaa.oman@mibts.com">mahaa.oman@mibts.com</a></p>
                            </li>
                        </ul>
                    </Col>

                    <Col>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8132184682822!2d58.38142341497815!3d23.575150884676003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x110e863c9b334592!2zMjPCsDM0JzMwLjUiTiA1OMKwMjMnMDEuMCJF!5e0!3m2!1sen!2sin!4v1642317637430!5m2!1sen!2sin"
                            height="250"
                            style={{border: 0, width: "100%"}}
                            allowFullScreen=""
                            loading="lazy"
                            title="google map address"
                        />
                    </Col>
                </Row>

            </div>
        )
    }

}

export default ContactUs;