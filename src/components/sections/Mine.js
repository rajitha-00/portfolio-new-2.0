import React from 'react'
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import AboutCard from '../reusable/AboutCard';
import Image from '../elements/Image';
import CareerCard from '../reusable/CareerCard';
import Education from './Education';

const propTypes = {
    ...SectionSplitProps.types
  }
  
  const defaultProps = {
    ...SectionSplitProps.defaults
  }

const Mine =({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
})=> {

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
    
      const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );
    
      const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
      );
    
      const sectionHeader = {
        title: 'Hi, I am Rajitha Priyankara',
        paragraph: ''
      };
    
  return (
    <>
    <section
      {...props}
      className={outerClasses}
    >
        <div className="container">
            <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
            <AboutCard
              smallHeader ="This is me"
              projectHeader=""
              projectDescription="I am final year SE student from staffordshire university.
               I am really into programming that's why I want to be a Software Engineer. I am currently working in HCLTech as a Junior Analyst for 1 year and 
               3 months. Also, I have 6 months have experinece in InfiniSolution as intern fontend developer.

               "
            />

            <Education/>
{/* 
           <div className="center-content working-env">
             <div>
               
              <p className="m-32 mb-32 text-center reveal-from-bottom" data-reveal-delay="400">
                  Working Environment </p>

                  <ul>
                    <li>Laptop: ASUS Vivobook </li>
                    <li>Pc: Ryzen 5 3600, 16GB 3200MHz, 512GB SSD</li>
                    <li>Monitor: HP 22f IPS </li>
                    <li>Connection: SLT Fiber</li>
                    <li>Code Editor: VS code (#my fav)</li>
                    <li>Extensions: #tabnine #CoPilot #prettier #gitGraph & other intellisense #</li>
                  </ul>

              <Image
                  src={require('./../../assets/images/env1.jpeg')}
                  alt="Features split 01"
              />
             </div>
            
         
           </div> */}

          </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Mine