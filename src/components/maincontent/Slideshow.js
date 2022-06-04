import React from "react"
// images
import modalimg1 from "../../images/modalimg1.jpg"
import modalimg2 from "../../images/modalimg2.jpg"
import modalimg3 from "../../images/modalimg3.jpg"
import modalimg4 from "../../images/modalimg4.jpg"
import modalimg5 from "../../images/modalimg5.jpg"
import modalimg6 from "../../images/modalimg6.jpg"
// hooks
import { useEffect } from "react"
// stylesheets
import "../../stylesheets/slideshow.css"

export const Slideshow = () => {

    useEffect(() => {
        var allelements = document.querySelectorAll(".sideshow_img-cont")
        var allimages = document.querySelectorAll('.slideshow__image')
        var j = 0
        setInterval(() => {
            for (var i = 0; i < allelements.length; i++) {
                allelements[i].style.opacity = "0"
                allimages[i].classList.remove('slideshow__image-transform')
            }
            allelements[j].style.opacity = "1"
            allimages[j].classList.add('slideshow__image-transform')
            if (j === allelements.length - 1) {
                j = 0
            }
            else {
                j = j + 1
            }
        }, 5000)
    }, [])

    return (
        <>
            <div className="slideshow__container">
                <div className="slideshow__image-container">
                    <div className="slideshow__wraper"></div>
                    <div className="sideshow_img-cont" id="slidehshow_img1">
                        <img src={modalimg1} className="slideshow__image" />
                    </div>
                    <div className="sideshow_img-cont" id="slidehshow_img2">
                        <img src={modalimg2} className="slideshow__image" />
                    </div>
                    <div className="sideshow_img-cont" id="slidehshow_img3">
                        <img src={modalimg3} className="slideshow__image" />
                    </div>
                    <div className="sideshow_img-cont" id="slidehshow_img4">
                        <img src={modalimg4} className="slideshow__image" />
                    </div>
                    <div className="sideshow_img-cont" id="slidehshow_img5">
                        <img src={modalimg5} className="slideshow__image" />
                    </div>
                    <div className="sideshow_img-cont" id="slidehshow_img6">
                        <img src={modalimg6} className="slideshow__image" />
                    </div>
                </div>
                <div className="slideshow__data-container">
                    <div className="slideshow__data">
                        <div className="slideshow__para1">
                            <p>Since 2005</p>
                        </div>
                        <div className="slideshow__para2">
                            <p>Textilery Creating The Best <span>Textile</span> Solutions</p>
                        </div>
                        <div className="slideshow__para3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </div>
                        <div className="slideshow__video-cont">
                            <div className="slideshow__playbutton">
                                <svg className="play__button"></svg>
                            </div>
                            <div className="slideshow__watch-video">
                                <p>Watch Video</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}