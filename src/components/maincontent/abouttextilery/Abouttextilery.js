import React from 'react'
// images
import textilery1 from "../../../images/abouttextliery1.jpg"
import textilery2 from "../../../images/abouttextliery2.jpg"
import founder from "../../../images/founder.jpg"
// icons
import { SiOpenbadges, } from "react-icons/si"
import { BsPlusLg } from "react-icons/bs"
import { AiOutlineCheckCircle } from "react-icons/ai"
// stylesheets
import "../../../stylesheets/texilery.css"

export const Abouttextilery = () => {
    return (
        <>
            <section className='textilery__section'>
                <div className='textilery__cont'>
                    <div className='textilery__images'>
                        <div className='textilery-img1-cont'>
                            <img src={textilery1} className="textilery__image1" />
                        </div>
                        <div className='textilery-img2-cont'>
                            <img src={textilery2} className="textilery__image2" />
                        </div>
                    </div>
                    <div className='textilery__data-cont'>
                        <div className='textilery__data'>
                            <div className='textilery__data-cont1'>
                                <p className='textilery__data-heading'>About Textilery</p>
                                <p className='textilery__data-title'>We provide the best textile Industry Since 2005</p>
                                <p className='textilery__data-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud</p>
                            </div>
                            <div className='textilery__data-cont2'>
                                <div className='textilery__data-banner'>
                                    <div>
                                        <SiOpenbadges />
                                    </div>
                                    <p>
                                        16
                                        <span>
                                            <BsPlusLg />
                                        </span>
                                    </p>
                                    <p>Years Of Experience</p>
                                </div>
                                <ul className='textilery__data-list'>
                                    <li>
                                        <span>
                                            <AiOutlineCheckCircle className={'textilery__list-style'}/>
                                        </span>
                                        <span>
                                            Best Quality Standards
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <AiOutlineCheckCircle className={'textilery__list-style'}/>
                                        </span>
                                        <span>
                                            100% Satisfaction Guarantee
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <AiOutlineCheckCircle className={'textilery__list-style'}/>
                                        </span>
                                        <span>
                                            Quality Control System
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <AiOutlineCheckCircle className={'textilery__list-style'}/>
                                        </span>
                                        <span>
                                            Commitment to Customers
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <AiOutlineCheckCircle className={'textilery__list-style'}/>
                                        </span>
                                        <span>
                                            Highly Professional Team
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <AiOutlineCheckCircle className={'textilery__list-style'}/>
                                        </span>
                                        <span>
                                            Global fabrics Distributor
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className='textilery__data-cont3'>
                                <div className='textilery__founder-imgcont'>
                                    <img src={founder} />
                                </div>
                                <div className='textilery__founder-data'>
                                    <p>Miya Draper</p>
                                    <p>Founder Textilery</p>
                                </div>
                                <div className='textilery__founder-buttoncont'>
                                    <button>More About Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
