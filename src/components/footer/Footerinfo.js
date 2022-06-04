import React from 'react'
// images
import logo from "../../images/logo-footer.png"
// icons
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"
// stylesheets
import "../../stylesheets/footer.css"

export const Footerinfo = () => {
    return (
        <div className='footer__info'>
            <div className='footer__info-logo-cont'>
                <img src={logo} className="footer__info-logo" />
            </div>
            <div className='footer__info-data'>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod</p>
            </div>
            <div className='footer__info-social'>
                <div className='footer__social-icon-cont'>
                    <FaFacebookF className='footer__social-icon' />
                </div>
                <div className='footer__social-icon-cont'>
                    <FaTwitter className='footer__social-icon' />
                </div>
                <div className='footer__social-icon-cont'>
                    <FaInstagram className='footer__social-icon' />
                </div>
                <div className='footer__social-icon-cont'>
                    <FaYoutube className='footer__social-icon' />
                </div>
            </div>
        </div>
    )
}
