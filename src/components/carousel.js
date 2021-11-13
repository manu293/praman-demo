// imports
import React from "react";
import Carousel from 'react-bootstrap/Carousel';


// local imports
import Service1 from "../images/service1.jpg";
import Service2 from "../images/service2.jpg";
import Service3 from "../images/service3.jpg";

class CustomCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <Carousel
                fade={true}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Service1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Service2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Service3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CustomCarousel;