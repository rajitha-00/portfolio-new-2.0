import React from 'react'
import Image from '../elements/Image';
import classNames from 'classnames';


const TechCard =({
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
  return (
    <>
     <div className="tiles-item reveal-from-bottom">
        <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
            <Image
                src={require('./../../assets/images/feature-tile-icon-01.svg')}
                alt="Features tile icon 01"
                width={64}
                height={64} />
            </div>
        </div>
        <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">
                {props.tech}
            </h4>
            <p className="m-0 text-sm">
                {props.techDis}
            </p>
            <p className="m-2 text-sm">
                Experience Level : <b> {props.exp}</b>
            </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default TechCard