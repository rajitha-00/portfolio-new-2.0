import React from 'react'
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const Projects=() => {
  return (
    <>
    <Header/>
    <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
    <Footer/>
    </>
  )
}

export default Projects;