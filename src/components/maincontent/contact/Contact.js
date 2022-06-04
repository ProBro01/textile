import React from 'react'
// image
import backgroundimg from "../../../images/modalimg4.jpg"
// stylesheet
import "../../../stylesheets/contact.css"

export const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-overlay'></div>
        <div className='contact-image-cont'>
            <img src={backgroundimg}/>
        </div>
        <div className='contact-cont'>
            <div className='contact-info'>
                <p>Do You Want Custom Project With Textilery? Contact Us Now</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua</p>
                <button>Contact Us</button>
            </div>
            <div></div>
        </div>
    </div>
  )
}
