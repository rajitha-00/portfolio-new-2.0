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
              smallHeader ="Virtual Meeting Web App"
              projectHeader="InfiniSolution.lk"
              projectDescription="A web app that allows users to create and manage meetings. The app is built with React, Redux, Node, Express, and MongoDB."
            />
            <ProjectCard
              smallHeader ="Virtual Meeting Web App"
              projectHeader="Ruhunu Furniture"
              projectDescription="A web app that allows users to create and manage meetings. The app is built with React, Redux, Node, Express, and MongoDB."
            />
             <ProjectCard
              smallHeader ="Virtual Meeting Web App"
              projectHeader="Infini TURIS"
              projectDescription="A web app that allows users to create and manage meetings. The app is built with React, Redux, Node, Express, and MongoDB."
            />
            <ProjectCard
              smallHeader ="Virtual Meeting Web App"
              projectHeader="L'Opera Web App"
              projectDescription="A web app that allows users to create and manage meetings. The app is built with React, Redux, Node, Express, and MongoDB."
            />
             <ProjectCard
              smallHeader ="Virtual Meeting Web App"
              projectHeader="Lings Car"
              projectDescription="A web app that allows users to create and manage meetings. The app is built with React, Redux, Node, Express, and MongoDB."
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