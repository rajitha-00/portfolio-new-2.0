import React from 'react'
import Image from '../elements/Image';
import classNames from 'classnames';
import { Line } from 'rc-progress';

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
          <div className="tecCard">

          <div className="features-tiles-item-header">
              <div className="features-tiles-item-image mb-16">
              <Image
                  src={props.path}
                  alt="Features tile icon 01"
                  width={70}
                  height={64}
                  />
              </div>
          </div>
          <div className="features-tiles-item-content">
              <h4 className="mt-0 mb-8">
                  {props.tech}
              </h4>
              <p className="m-0 text-sm">
              Total Projects  :  {props.techDis}
              </p>
              <p className="m-2 text-sm">
                  Experience Level : <b> {props.exp}</b>

              </p>
              <Line percent={props.xp} strokeWidth="3"   width={200} strokeColor={props.color} />
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default TechCard