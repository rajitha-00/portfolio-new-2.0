import React from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Mine from '../components/sections/Mine';
import Testimonial from '../components/sections/Testimonial';
const AboutMe =()=> {
  return (
    <>
{/* eslint-disable-next-line  */}
<Header/>
<Mine invertMobile topDivider imageFill className="illustration-section-02" />
<Testimonial topDivider />
<Footer/>
    </>
  )
}

export default AboutMe