import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import TechCard from '../reusable/TechCard';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Technologies & Frameworks',
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
          <div className={tilesClasses}>

            <TechCard
            tech="React.js"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="Next.js"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="Three.js"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="Firebace"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="Material-UI"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="Tailwind CSS"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="PHP"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="MySQL & MS SQL"
            techDis="bla bla bla"
            exp="Expert"
            />

            <TechCard
            tech="JAVA"
            techDis="bla bla bla"
            exp="Expert"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;