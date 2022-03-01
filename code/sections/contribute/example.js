import React from 'react'
import animations from '../../../assets/js/animations';
import images from '../../../assets/js/images'

function Example({ _body, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className='contribute-example' data-aos={animations.fadeUp}>
            <div className='contribute-example-body'>
                {_body}
            </div>
            <div className='contribute-example-hero'>
                <img src={handleUrl(images.code)} alt='hero' />
            </div>
        </div>
    )
}

export default Example