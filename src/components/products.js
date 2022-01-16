// imports
import React from "react";
import {Accordion } from "react-bootstrap";

class Products extends React.PureComponent {

    render() {
        return (
            <div className="whoarewe-container">
                <p className="whoarewe-header-text">
                    Products
                </p>
                <hr />

                <Accordion defaultActiveKey="0">
        
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b>Electrical Division</b></Accordion.Header>
                        <Accordion.Body>
                            We are one of the leading distributors of Electrical products within the Sultanate of Oman. Being recognized as one of the largest and most responsive electrical distributors in the industry, MTBS caters to a wide range of electrical products and accessories.
                            <br /><br/>
                            <ul>
                                <li>Cable Trays & Accessories </li>
                                <li>Cable Ladders & Accessories</li>
                                <li>Cable Trunking & Accessories</li>
                                <li>Cable Support systems</li>
                                <li>Cable Cleats</li>
                                <li>Electrical Conduits</li>
                                <li>Earthing & Lightning Systemss</li>
                                <li>Led Lights</li>
                                <li>Electrical Cables</li>
                                <li>Electrical Consumables</li>
                                <li>Industrial Sockets</li>
                                <li>OEM spares</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b>Mechanical Division</b></Accordion.Header>
                        <Accordion.Body>
                            We focus on delivering specialized products and services to the Oil & Gas Segment in Oman. This includes – Piping, Valves, Process Equipment, Corrosion Monitoring and other specialized services.<br/><br/>
                            With our in-depth knowledge and technical competency in handling the products and services, we form an effective and interactive communication between the client and the manufacturer, thereby meeting expectations consistently and delivering compliant end results.<br/><br/>
                            <ul>
                                <li>Valves (All types)</li>
                                <li>Structural Steel Products</li>
                                <li>Pipes, fittings (Seamless, Carbon)</li>
                                <li>Chemical Injection Skids </li>
                                <li>Pumps</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>Instrumentation Division</b></Accordion.Header>
                        <Accordion.Body>
                            We believe in precision which guides MTBS to be one of the foremost and largest distributors of Instrumentation products and accessories in the industry. With a dedicated service team available inhouse, MTBS undertakes various type of commissioning & maintenance activities on supplied products.
                            <br /><br/>
                            <ul>
                                <li>Field Instruments</li>
                                <li>Instrumentation Cables</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
            
                </Accordion>

                <br/>
            </div>
        )
    }

}

export default Products;