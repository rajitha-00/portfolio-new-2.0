import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import TechCard from '../reusable/TechCard';

import pngreact from '../../assets/images/pngreact.png';
import next from '../../assets/images/next.png';
import three from '../../assets/images/three.jpeg';
import firebace from '../../assets/images/firebace.png';
import mui from '../../assets/images/mui.png';
import tailwind from '../../assets/images/tailwind.png';
import php from '../../assets/images/php.png';
import sql from '../../assets/images/sql.png';
import java from '../../assets/images/java.jpg';

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
            path = {pngreact}
            tech="React.js"
            techDis="bla bla bla"
            exp="Expert"
            xp="90"
            />

            <TechCard
            path = {next}
            tech="Next.js"
            techDis="bla bla bla"
            exp="Expert"
            xp="90"
            />

            <TechCard
            path = {three}
            tech="Three.js"
            techDis="bla bla bla"
            exp="Expert"
            xp="25"
            color="#F08A5D"
            />

            <TechCard
             path = {firebace}
            tech="Firebase"
            techDis="bla bla bla"
            exp="Expert"
            xp="25"
            color="#F08A5D"
            />

            <TechCard
             path = {mui}
            tech="Material-UI"
            techDis="bla bla bla"
            exp="Expert"
            xp="90"
            />

            <TechCard
             path = {tailwind}
            tech="Tailwind CSS"
            techDis="bla bla bla"
            exp="Expert"
            xp="50"
            color="#14FFEC"
            />

            <TechCard
             path = {php}
            tech="PHP"
            techDis="bla bla bla"
            exp="Expert"
            xp="90"
            />

            <TechCard
             path = {sql}
            tech="MySQL & MS SQL"
            techDis="bla bla bla"
            exp="Expert"
            xp="90"
            />

            <TechCard
             path = {java}
            tech="JAVA"
            techDis="bla bla bla"
            exp="Expert"
            xp="30"
            color="#F08A5D"
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