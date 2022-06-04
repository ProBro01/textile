import React from 'react'

export const Footerlinks = (props) => {
  return (
    <div className='footer__link-cont'>
        <div className='footer__link-headcont'>
            <p>{props.linkheading}</p>
        </div>
        <ul>
            {props.footerlink.map((element, index) => {
                return <li key={index} className="footer__link">{element}</li>
            })}
        </ul>
    </div>
  )
}
