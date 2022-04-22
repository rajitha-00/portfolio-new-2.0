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
                career ="I have completed my HND in Software Engineering.I am hoping a average good results with completed modules. 
                I will receive my certificate soon. Because It has ended in March 2022.
                I completed Ethical Hacking Certification Event while studying Esoft Metro Campus.
                "
                role   ="Software Engineering"
                time   ="2020 - 2022"
                
                />
        
                <CareerCard
                company="GCE A Level"
                career ="I was studied at Kingswood College, Kandy one of the best school in Sri Lanka. My A/L result was very good. 
                I have completed my A/L in Mathematics 'C' , Physics 'S' & Chemistry 'S. And I did so many things in my school life."
                role   ="Physical Science"
                time   ="2017 - 2019"
                
                />
        
                <CareerCard
                company="GCE O Level"
                career ="I did my O/L very well. I got 8As & B for My O/L.
                ____________ ___ I was co-editor of Kingswood Astronomical Society. Former Taekwondo Player at school team. I was a soccer player at 11st team."
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