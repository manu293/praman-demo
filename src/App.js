// imports
import React from "react";

// local imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import CustomCarousel from "./components/carousel";
import WhoareWe from "./components/whoarewe";
import Footer from "./components/footer";

class App extends React.Component {

    render() {
        return (
            <>
                <Header />
                <CustomCarousel />
                <WhoareWe />
                <Footer />
            </>
        )
    }

}

export default App;