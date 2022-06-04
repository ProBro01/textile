import React from 'react'

export const Project = (props) => {
  return (
    <div className='project__piece-cont'>
        <div className='project__piece-overlay'>
            <p>{props.heading}</p>
            <p>Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div className='project__piece-image-cont'>
            <img className='project__piece-image' src={props.imgurl}/>
        </div>
    </div>
  )
}
