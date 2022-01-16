// imports
import React from "react";
import {Card, Col, Row} from "react-bootstrap";

// local imports
import NewService1 from "../images/newService1.jpg";
import NewService2 from "../images/newService2.jpg";
import NewService3 from "../images/newService3.jpg";
import NewService4 from "../images/newService4.jpg";

class Services extends React.PureComponent {

    render() {
        return (
            <div className="whoarewe-container">
                <p className="whoarewe-header-text">
                    Services
                </p>
                <hr />

                <Row>
                    <Col sm={12} md={3} lg={3} className="mobileServiceColumn">
                        <Card className="serviceCard">
                            <Card.Img variant="top" src={NewService2} />
                            <Card.Body>
                                <Card.Text>
                                    <b>Industrial Equipment Painting Services</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3} lg={3} className="mobileServiceColumn">
                        <Card className="serviceCard">
                            <Card.Img variant="top" src={NewService3} />
                            <Card.Body>
                                <Card.Text>
                                    <b>Bulk Material Supply & Installation Services</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3} lg={3} className="mobileServiceColumn">
                        <Card className="serviceCard">
                            <Card.Img variant="top" src={NewService1} />
                            <Card.Body>
                                <Card.Text>
                                    <b>Fabrication & Erection Services </b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={3} lg={3} className="mobileServiceColumn">
                        <Card className="serviceCard">
                            <Card.Img variant="top" src={NewService4} />
                            <Card.Body>
                                <Card.Text>
                                    <b>Professional Welding Services</b>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Services;