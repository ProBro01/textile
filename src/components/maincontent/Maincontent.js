import React from 'react'
// component
import { Slideshow } from './Slideshow'
import { Slideshowinfo } from "./Slideshowinfo"
import { Abouttextilery } from './abouttextilery/Abouttextilery'
import { Blog } from './blog/Blog'
import { Contact } from './contact/Contact'
import { Experience } from './experience/Experience'
import { Ourservice } from './ourservices/Ourservice'
import { Ourproject } from './ourproject/Ourproject'

export const Maincontent = () => {
  return (
    <>
        <section>
            <Slideshow/>
            <Slideshowinfo/>
            <Abouttextilery/>
            <Ourservice/>
            <Experience/>
            <Ourproject/>
            <Contact/>
            <Blog/>
        </section>
    </>
  )
}
