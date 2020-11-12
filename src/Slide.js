import React from 'react';
import PropTypes from 'prop-types';
import './styles/components/slideshow.css';

const Slide = ({property}) => {
    const {index, name, image, description} = property;
    return (
        <div id={`slide-${index}`} className="slide">
            <h3>{name}</h3>
            <img src={image} alt="webpagephoto" id="slidephoto"/>
            <span className="index">{index+1}</span>
            <div className="detail"><p>{description}</p></div>
        </div>
    )
}

Slide.propTypes = {
    property: PropTypes.object.isRequired
}

export default Slide;