import React from 'react'
// components
import { Footerinfo } from './Footerinfo'
import { Footerlinks } from './Footerlinks'
// style
import "../../stylesheets/footer.css"
// icons
import { AiOutlineClockCircle } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"

export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer__cont'>
                    <div className='footer__section'>
                        <Footerinfo />
                        <Footerlinks linkheading={"Quick Links"} footerlink={['about us', 'service', 'projects', 'pricing', 'contact']} />
                        <Footerlinks linkheading={"Useful Links"} footerlink={['privacy policy', 'terms and conditions', 'disclaimer', 'support', 'FAQ']} />
                        <div className='footer__appointment-cont'>
                            <div>
                                <p>Make Appointment</p>
                            </div>
                            <p>
                                <AiOutlineClockCircle />
                                9 AM - 5 PM , Monday - Saturday
                            </p>
                            <div>
                                <div>
                                    <BsTelephone />
                                </div>
                                <div>
                                    <p>Call Us Today</p>
                                    <p>(+62)81 589 2581</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer__bar'>
                        <p>Textile &#38; Garment Industry Template Kit by Jegtheme</p>
                        <p>Copyright &#169; 2021. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
