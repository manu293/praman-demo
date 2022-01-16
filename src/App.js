// imports
import React from "react";
import ScrollSpy from "react-ui-scrollspy";

// local imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import CustomCarousel from "./components/carousel";
import WhoareWe from "./components/whoarewe";
import Products from "./components/products";
import Services from "./components/services";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

class App extends React.Component {

    render() {
        return (
            <>
                <Header />
                <CustomCarousel/>
        
                <ScrollSpy>
                    <WhoareWe id="home" />
                    <Products id="products" />
                    <Services id="services" />
                    <ContactUs id="contactUs" />
                </ScrollSpy>
               
                <Footer />
            </>
        )
    }

}

export default App;