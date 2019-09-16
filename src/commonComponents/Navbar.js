import React, {Component} from "react"
import navbarItems from "../data/navbarItems"
import profilePic from "../img/profilePic.png"
import burgerMenuIcon from "../img/menuIcon.svg"

class Navbar extends Component{
    render(){
        return(
            <nav className="navContainer">
                <img className="burgerMenu" src={burgerMenuIcon} alt="menu" onClick={this.toggleMenu}></img>
                <img className="logo" src="/" alt="LOGO"></img>
                <ul className="mainNav">
                    {this.createNav()}
                </ul>
                <img className="profilePic" src={profilePic} alt="no_pic"></img>
            </nav>
        )
    }

    createNav(){
        const navbar = navbarItems.map(item => {
            const subnavList = item.subnav !== undefined && item.subnav.length > 0 ?
            item.subnav.map(subitem => {
                return <li className="subnavItem" key={subitem.name}><a href={subitem.url}>{subitem.name}</a></li>
            }) :
            null

            return(
                <li className="navItem" key={item.name}>
                    <a href={item.url}><img className="navItemIcon" src={item.icon} alt=""></img>{item.name}</a>
                    <ul className="subNav" key={item.name}>{subnavList}</ul>
                </li>
            ) 
        })
        return navbar
    }

    toggleMenu(){
        document.querySelector('.mainNav').classList.toggle("visible")
    }
}

export default Navbar