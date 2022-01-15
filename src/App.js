// imports
import React from "react";

// local imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import CustomCarousel from "./components/carousel";
import WhoareWe from "./components/whoarewe";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";

class App extends React.Component {

    render() {
        return (
            <>
                <Header />
                <CustomCarousel />
                <WhoareWe />
                <ContactUs />
                <Footer />
            </>
        )
    }

}

export default App;