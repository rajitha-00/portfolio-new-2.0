import React from 'react';
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

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

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
    title: 'My Career Path',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <CareerCard
            company="HCL Technologies Sri-Lanka"
            career ="I'm thrilled to share that I've been hired as a Junior Analyst at HCL 
            Technologies. I'll be assisting the IT Infrastructure team, and I'm looking 
            forward to learning and growing in this position. Because the IT sector is 
            always changing, I'd like to get some infrastructure experience for my 
            future career."
            role   ="Junior Analyst"
            time   ="(2021- Oct) - Now"
            />
            <CareerCard
            company="Infini Solutions Limited"
            career ="I'm excited to share that after three months as an intern at Infini Solutions 
            Limited, I was offered and accepted a part-time position as a Frontend 
            Developer. I'd want to express my gratitude to the Infini team for the 
            training and preparation that lead to this chance, as well as their 
            unwavering support throughout the process. They trained and 
            encouraged me to be a developer even though I had no knowledge of 
            react.js or git ideas."
            role   ="Frontend Developer"
            time   ="2021 (April -Nov)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;