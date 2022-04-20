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
        paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
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
              projectDescription="I am really exited to announce that this was my final main project at the InfiniSolutions. They gave me the opertuinity to build the main website as the results of my 6 months of career success."
            />

            <Education/>

           <div className="center-content">
            
            <p className="m-32 mb-32 text-center reveal-from-bottom" data-reveal-delay="400">
                Working Environment </p>
           
            <Image
                src={require('./../../assets/images/env1.jpeg')}
                alt="Features split 01"
            />
         
           </div>

          </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Mine