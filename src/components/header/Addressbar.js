import React from 'react'
import "../../stylesheets/header.css"
// icons
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"

export const Addressbar = () => {
    return (
        <div className='header__address-bar-cont'>
            <div className='header__address-bar'>
                <div className='header__address-bar-info'>
                    <div className='header__address-bar-location'>
                        <i className='fas fa-map-marker-alt' style={{ 'color': 'white' }}></i>
                        <p>Jl. Sunset Road No.815, Kuta, Bali 80361</p>
                    </div>
                    <div className='header__address-bar-email'>
                        <i className="fa fa-envelope" style={{'marginRight':'1em', 'marginLeft':'2em'}}></i>
                        <p>support@domain.com</p>
                    </div>
                </div>
                <div className='header__address-bar-social'>
                    <div className='header__social-icons'>
                        <FaFacebookF className='head-soicon'/>
                        <FaTwitter className='head-soicon'/>
                        <FaInstagram className='head-soicon'/>
                        <FaYoutube className='head-soicon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
