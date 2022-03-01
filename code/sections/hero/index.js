import React from 'react'
import animations from '../../../assets/js/animations';
import images from '../../../assets/js/images'

const Hero = ({ _body, _relativeURL, _ID }) => {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className='hero'>
            <div className='hero-description' data-aos={animations.fadeUp}>
                {_body}
            </div>
            <img src={handleUrl(images.mobileDevice)} className='hero-image' data-aos={animations.fadeUp} />
        </div>
    )
}

export default Hero
