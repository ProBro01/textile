import React from 'react'
// icons
import { FaArrowRight } from "react-icons/fa"

export const Blogarticle = (props) => {
  return (
    <div className='blog-article-cont'>
        <div className='blog-article-image'>
            <img src={props.src}/>
        </div>
        <div className='blog-article-info'>
            <p className='blog-info-heading'>{props.heading}</p>
            <p className='blog-info-date'>{props.date}</p>
            <p className='blog-info-info'>{props.info}</p>
            <p className='readmorebutton'>Read More<span><FaArrowRight/></span></p>
        </div>
    </div>
  )
}
