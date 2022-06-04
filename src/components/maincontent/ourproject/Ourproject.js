import React, { useEffect } from 'react'
// stylesheet
import "../../../stylesheets/project.css"
import { Project } from './Project'
// images
import projectimg1 from "../../../images/projectimg1.jpg"
import projectimg2 from "../../../images/projectimg2.jpg"
import projectimg3 from "../../../images/projectimg3.jpg"
import projectimg4 from "../../../images/projectimg4.jpg"
import projectimg5 from "../../../images/projectimg5.jpg"
import projectimg6 from "../../../images/projectimg6.jpg"
import projectimg7 from "../../../images/blog2.jpg"

export const Ourproject = () => {

    function calSize(){
        var conts = document.querySelectorAll('.project__imgcont')
        conts.forEach((element) => {
            var numofnode = element.childElementCount
            var widthofnode = Math.floor(100/numofnode)
            element.childNodes.forEach((element) => {
                element.width = `${widthofnode}%`
            })
        })
    }

    useEffect(() => {
        calSize()
    })

    return (
        <section className='project__section'>
            <div className='project__cont'>
                <div className='project__info'>
                    <p>Our Projects</p>
                    <p>Our Latest Projects</p> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='project__imgcont'>
                    <Project heading="Satin Fabric"  imgurl={projectimg1}/>
                    <Project heading="Fashion Project"  imgurl={projectimg2}/>
                    <Project heading="Blue Textile"  imgurl={projectimg3}/>
                </div>
                <div className='project__imgcont'>
                    <Project heading="Cotton Fabric"  imgurl={projectimg4}/>
                    <Project heading="Zipper Textile"  imgurl={projectimg5}/>
                    <Project heading="Colorful Fabric"  imgurl={projectimg6}/>
                    <Project heading="Linen Fabric Project"  imgurl={projectimg7}/>
                </div>
            </div>
        </section>
    )
}
