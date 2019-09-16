import React, {Component} from "react"
import footerLinks from "../data/footerLinks"
import sendIcon from "../img/send.svg"
import mediaLinks from "../data/mediaLinks"

class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="footerContainer">
                <div className="footerLinksAndLogo">
                    <img className="logo" src="/" alt="LOGO"></img>
                    <div className="linkContainer">
                        {this.createSiteLinks()}
                    </div>
                </div>
                <div className="footerFormAndMedia">
                    <form className="newsletterForm">
                        <input type="email" className="textInput" placeholder="Email" required></input>
                        <h6>Stay in touch with us for the freshest products!</h6>
                        <button type="submit"><img src={sendIcon} alt="submit"></img></button>
                    </form>
                    <div className="mediaLinks">
                        {this.createMediaLinks()}
                    </div>
                </div>
            </div>
        </footer>
        )
    }

    createSiteLinks(){
        return footerLinks.map(link => {
            return <a className="singleLink" href={link.url} key={link.name}>{link.name}</a>
        })
    }

    createMediaLinks(){
        return mediaLinks.map(link => {
            return <a className="singleLink" href={link.url} key={link.icon}><img src={link.icon} alt={link.url}></img></a>
        })
    }
}

export default Footer