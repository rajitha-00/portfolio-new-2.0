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
    title: 'Career & Experince ',
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
            career ="One year and 4 months experienced System and Windows Administrator 
            with knowledge of active directory, Vulnerability support assistance, 
            Patching and managing large scale enterprise systems. Working experience 
            with global clients and team members. Strong knowledge of Microsoft 
            software trouble shooting and fixing. "
            role   ="Junior Analyst"
            time   ="(2021- Oct) - Now"
            />
            <CareerCard
            company="Infini Solutions Limited"
            career ="I have six-month experience as intern frontend developer with the knowledge 
            of UI/UX and frontend web-development. I worked on couple of projects with 
            react.js and next.js. I build user friendly and mobile friendly web applications 
            during this intern period with agile environment. Also got the experience of 
            troubleshooting CSS and how to fix it"
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