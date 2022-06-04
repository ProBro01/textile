import React from 'react'
// components
import { Blogarticle } from './Blogarticle'
// images
import blog1 from "../../../images/modalimg3.jpg"
import blog2 from "../../../images/blog2.jpg"
import blog3 from "../../../images/blog3.jpg"
// stylesheet
import "../../../stylesheets/blog.css"

export const Blog = () => {
    return (
        <>
            <section className='blog-section'>
                <div className='blog-cont'>
                    <div className='blog-heading'>
                        <p>Our Blog</p>
                    </div>
                    <div className='blog-title'>
                        <p>Latest Blog &#38; Articles</p>
                    </div>
                    <div className='blog-info'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                    <div className='blog-articles-cont'>
                        <Blogarticle
                            src={blog1}
                            heading={"Can Textiles Lead The Way During The Pandemic?"}
                            date={"July 21, 2021"}
                            info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...."} />
                        <Blogarticle
                            src={blog2}
                            heading={"Role of Fashion Merchandising in Apparel Industry"}
                            date={"July 16, 2021"}
                            info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...."} />
                        <Blogarticle
                            src={blog3}
                            heading={"One Stop Solution for Textiles Fabrics Materials"}
                            date={"July 16, 2021"}
                            info={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...."} />
                    </div>
                </div>
            </section>
        </>
    )
}
