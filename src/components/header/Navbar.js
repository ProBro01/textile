import React from "react"
// images
import logo from "../../images/logo.png"
// components
import { Optlist } from "./Optlist"
// stylesheets
import "../../stylesheets/header.css"


export const Navbar = () => {
    return (
        <>
            <div className="navbar__container">
                <div className="navbar__img-cont">
                    <img src={logo} className="navbar__logo" />
                </div>
                <div className="navbar__navlinks-cont">
                    <li className="navbar_link">Home</li>
                    <li className="navbar_link">About us</li>
                    <li className="navbar_link">Services</li>
                    <Optlist name={"Projects"} opts={["projects", "project details"]}/>
                    <Optlist name={"Pages"} opts={["pricing", "our team", "faq", "404 page"]}/>
                    <Optlist name={"Blog"} opts={["blog", "single blog"]}/>
                    <li className="navbar_link">Contact</li>
                </div>
                <div className="navbar__button-cont">
                    <button className="navbar__button">Get A Quote</button>
                </div>
            </div>
        </>
    )
}