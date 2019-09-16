import React, {Component} from "react"
import "../style/landingPage.css"
import Navbar from "../commonComponents/Navbar"
import News from "./News"
import Footer from "../commonComponents/Footer"
import Trending from "./Trending"

class LandingPage extends Component {
    render() {
        return(
            <div>
                <Navbar></Navbar> 
                <News></News>  
                <Trending></Trending>  
                <Footer></Footer>                        
            </div>
        )
    }
}

export default LandingPage