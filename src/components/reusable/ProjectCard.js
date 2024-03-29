import React from 'react'
import Image from '../elements/Image';
import classNames from 'classnames';
const ProjectCard =({
    imageFill,
    className,
    ...props
})=> {
  return (
    <>
        <div className="split-item">
            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                   {props.smallHeader}
                </div>
                <h3 className="mt-0 mb-12">
                    {props.projectHeader}
                </h3>
                <p className="m-0">
                    {props.projectDescription}
                </p>
              
                <br/>
                <a href={props.link}>Visit</a>
                <br/>
                <p className="m-0 text-color-secondary">
                    {props.techs}
                </p>
            </div>
            <div className={
            classNames(
                'split-item-image center-content-mobile reveal-from-bottom',
                imageFill && 'split-item-image-fill'
            )}
            data-reveal-container=".split-item">
            <Image
                src={props.src}
                alt="Features split 01"
                width={600}
                height={396} />
            </div>
        </div>
    </>
  )
}

export default ProjectCard;