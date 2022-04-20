import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ProjectCard from '../reusable/ProjectCard';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
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
}) => {

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
    title: 'My Projects',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <ProjectCard
              smallHeader ="New Website of InfiniSolution"
              projectHeader="InfiniSolution.lk"
              projectDescription="I am really exited to announce that this was my final main project at the InfiniSolutions. They gave me the opertuinity to build the main website as the results of my 6 months of career success."
            />
            <ProjectCard
              smallHeader ="Ruhunu furniture Website"
              projectHeader="Ruhunu Furniture"
              projectDescription="This was my very first Tailwind CSS project & I have guided by Dumidu Rajakaruna (COO) & also Thushara (Developer).  "
            />
             <ProjectCard
              smallHeader ="Virtual Teaching Platform"
              projectHeader="Infini TURIS"
              projectDescription="This was my second project with InfiniSolution. This platform not yet launched. This was a key point to me because I had never work before with AdobeXD. So that case I have learned about adobe XD also. "
            />
            <ProjectCard
              smallHeader ="Attendance Management System"
              projectHeader="AMS Web App"
              projectDescription="I am really glad to tell you. This was my first react core-ui project. It was launched and very successful. This was also guided by Dumidu Rajakaruna."
            />
            <ProjectCard
              smallHeader ="Rebuild of Lings Car UI"
              projectHeader="Lings Car"
              projectDescription="A web app that allows users to create and manage meetings. The app is built with React, Redux, Node, Express, and MongoDB."
            />
            <ProjectCard
              smallHeader ="Virtual Meeting Platform"
              projectHeader="Infini Meet CMS"
              projectDescription="My first Web App. Infini Meet CMS is a web app that allows users to create and manage meetings. The app is built with React, Firebase & Material UI"
            />

            <ProjectCard
              smallHeader ="Virtual Learning Platform"
              projectHeader="Infini IRIS"
              projectDescription="This was also part of TURIS ,Meet CMS Project. I have learned so many CSS patterns & react component patterns while building these three projects. "
            />

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;