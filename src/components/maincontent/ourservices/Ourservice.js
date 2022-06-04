import React from 'react'
// stylesheet
import "../../../stylesheets/service.css"
// icons
import { FaArrowRight } from "react-icons/fa"

// images
import digitalknitting from "../../../images/digitalknitting.png"
import satin from "../../../images/satin.png"
import sew from "../../../images/sew.png"

export const Ourservice = () => {
    return (
        <section className='service__section'>
            <div className='service__overlay'></div>
            <div className='service__cont'>
                <div className='service__info'>
                    <div className='service__info_head'>
                        <p>Our Services</p>
                        <p>Delivering The Highest Quality Fabrics</p>
                    </div>
                    <div className='service__info-data'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <button className='button'>All Services</button>
                    </div>
                </div>
                <div className='service__tabs'>
                    <div className='service__card'>
                        <div className='service__card-overlay'></div>
                        <div className='service__card-infocont'>
                            <img src={sew} />
                            <p className='service__card-head'>Fabrics Dyeing</p>
                            <p className='service__card-info'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            <p className='readmorebutton'>Read More<span><FaArrowRight /></span></p>
                        </div>
                    </div>
                    <div className='service__card'>
                        <div className='service__card-overlay'></div>
                        <div className='service__card-infocont'>
                            <img src={satin} />
                            <p className='service__card-head'>Satin Weaving</p>
                            <p className='service__card-info'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            <p className='readmorebutton'>Read More<span><FaArrowRight /></span></p>
                        </div>
                    </div>
                    <div className='service__card-filled'>
                        <img src={digitalknitting} />
                        <p className='service__card-head'>Digital Fabric Printing</p>
                        <p className='service__card-info'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        <p className='readmorebutton'>Read More<span><FaArrowRight /></span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
