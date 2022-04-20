import React from 'react'
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import CareerCard from '../reusable/CareerCard';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Education =({
    className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
})=> {

    const outerClasses = classNames(
        'testimonial section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
      );
    
      const innerClasses = classNames(
        'testimonial-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );
    
      const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
      );
    
      const sectionHeader = {
        title: 'Education',
        paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
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
            <div className={tilesClasses}>
                <CareerCard
                company="Pearson BTEC HND"
                career =""
                role   ="Software Engineering"
                time   ="2020 - 2022"
                
                />
        
                <CareerCard
                company="GCE A Level"
                career =""
                role   ="Physical Science"
                time   ="2017 - 2019"
                
                />
        
                <CareerCard
                company="GCE O Level"
                career =""
                role   =""
                time   ="2016"
                
                />
            </div>
            </div>
        </div>
    </section>
   
    </>
  )
}

export default Education