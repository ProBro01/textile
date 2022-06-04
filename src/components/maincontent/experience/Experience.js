import React, {useEffect} from 'react'
// components
import { Expmeter } from './Expmeter.js'
// stylesheet
import "../../../stylesheets/experience.css"
// icons
import { HiArrowSmRight } from "react-icons/hi"

export const Experience = () => {

  // useEffect(() => {
  //   console.log("hello") 
  // })

  return (
    <div className='experience__container'>
      <div className='experience__overlay'></div>
      <div className='experience__details-cont'>
        <div className='experience__details-data'>
          <div className='experience__details-data-1'>
            <p>25 Years of Experience in Textile Industry</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Expmeter title={"Textile Service"} percentage={89} />
          <Expmeter title={"Textile Material"} percentage={86} />
          <Expmeter title={"Specialist Fabrics"} percentage={82} />
          <Expmeter title={"Experience"} percentage={86} />
        </div>
      </div>
      <div className='experience__background'>
        <div className='experience__background-overlay'></div>
      </div>
      <div className='experience__box'>
        <p>We Production Best Textiles</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim</p>
        <p>View Projects<span><HiArrowSmRight/></span></p>
      </div>
    </div>
  )
}
