import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ProjectCard from '../reusable/ProjectCard';

import Infini from '../../assets/images/Infini.JPG';
import Turis from '../../assets/images/Turis.JPG';
import Turis2 from '../../assets/images/Turis2.JPG';
import IrisHome from '../../assets/images/IrisHome.JPG';
import AMS from '../../assets/images/AMS.JPG';
import bauhinia from '../../assets/images/bauhinia.JPG';

import RuhunuFurniture from '../../assets/images/RuhunuFurniture.JPG';
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
    paragraph: 'These are some completed projects that I have worked on. In future I will be adding more projects to this section.'
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
              src = {Infini}
              techs="#next.js #material-ui #npm packages"
              smallHeader ="New Website of InfiniSolution"
              projectHeader="InfiniSolution.com"
              link="https://www.infinisolutionslk.com/"
              projectDescription="I am really exited to announce that this was my final main project at the InfiniSolutions. They gave me the opertuinity to build the main website as the results of my 6 months of career success."
            />
            <ProjectCard
              src = {RuhunuFurniture}
              link="https://ruhunu-furniture.vercel.app/"
              techs="#react.js #tailwind-css #npm packages"
              smallHeader ="Ruhunu furniture Website"
              projectHeader="Ruhunu Furniture"
              projectDescription="This was my very first Tailwind CSS project & I have guided by Dumidu Rajakaruna (COO) & also Thushara (Developer).  "
            />
            <ProjectCard
              src = {Turis2}
              techs="#next.js #material-ui #npm packages"
              smallHeader ="Virtual Teaching Platform"
              projectHeader="Infini TURIS"
              projectDescription="This was my second project with InfiniSolution. This platform not yet launched. This was a key point to me because I had never work before with AdobeXD. So that case I have learned about adobe XD also. "
            />
             <ProjectCard
              src = {bauhinia}
              link="https://github.com/rajitha-00/minimal-bauhinia"
              techs="#react.js #material-ui #npm packages #minimal-ui theme"
              smallHeader ="Virtual clothing store"
              projectHeader="BAUHINIA"
              projectDescription="This was my second project with InfiniSolution. This platform not yet launched. This was a key point to me because I had never work before with AdobeXD. So that case I have learned about adobe XD also. "
            />
            <ProjectCard
              src = {AMS}
              techs="#react.js #core-ui #npm packages #firebase"
              smallHeader ="Attendance Management System"
              projectHeader="AMS Web App"
              projectDescription="I am really glad to tell you. This was my first react core-ui project. It was launched and very successful. This was also guided by Dumidu Rajakaruna."
            />
            {/* <ProjectCard
              smallHeader ="Rebuild of Lings Car UI"
              projectHeader="Lings Car"
              projectDescription="A web app that allows users to create and manage meetings. The app is built with React, Redux, Node, Express, and MongoDB."
            /> */}
            <ProjectCard
              src = {Turis}
              techs="#react.js #material-ui #npm packages"
              smallHeader ="Virtual Meeting Platform"
              projectHeader="Infini Meet CMS"
              projectDescription="My first Web App. Infini Meet CMS is a web app that allows users to create and manage meetings. The app is built with React, Firebase & Material UI"
            />

            <ProjectCard
              src = {IrisHome}
              techs="#react.js #material-ui #npm packages"
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