import React from 'react'
import classNames from 'classnames';


const CareerCard=({
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
    <div className="tiles-item reveal-from-right" data-reveal-delay="200">
        <div className="tiles-item-inner">
        <div className="testimonial-item-content">
            <h5>
                {props.company}
            </h5>
            <p className="text-sm mb-0">
            — {props.career}
            </p>
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
            <span className="testimonial-item-name text-color-high"> {props.role}</span>
            <span className="text-color-low"> / </span>
            <span className="testimonial-item-link">
            <p> {props.time}</p>
            </span>
        </div>
        </div>
    </div>
    </>
  )
}

export default CareerCard