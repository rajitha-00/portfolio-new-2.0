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
    paragraph: 'Most of the technologies  I am still exploring, These are the techs that I have ever used. I am also looking for a new Learning materials.'
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
            techDis="15"
            exp="Expert"
            xp="90"
            />

            <TechCard
            path = {next}
            tech="Next.js"
            techDis="5"
            exp="Expert"
            xp="90"
            />

            <TechCard
            path = {three}
            tech="Three.js"
            techDis="1"
            exp="Rookie"
            xp="25"
            color="#F08A5D"
            />

            <TechCard
             path = {firebace}
            tech="Firebase"
            techDis="2"
            exp="Rookie"
            xp="25"
            color="#F08A5D"
            />

            <TechCard
             path = {mui}
            tech="Material-UI"
            techDis="13"
            exp="Expert"
            xp="90"
            />

            <TechCard
             path = {tailwind}
            tech="Tailwind CSS"
            techDis="2"
            exp="Average"
            xp="50"
            color="#14FFEC"
            />

            <TechCard
             path = {php}
            tech="PHP"
            techDis="3"
            exp="Expert"
            xp="90"
            />

            <TechCard
             path = {sql}
            tech="MySQL & MS SQL"
            techDis="7"
            exp="Expert"
            xp="90"
            />

            <TechCard
             path = {java}
            tech="JAVA"
            techDis="3"
            exp="Rookie"
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