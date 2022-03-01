import React from 'react'
import animations from '../../../assets/js/animations';
import images from '../../../assets/js/images';
import LinkButton from '../../components/LinkButton';

function Integration({ image, _body, url, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <li className='integration' data-aos={animations.fadeUp}>
            <img src={handleUrl(image)} className='integration-image' />
            {_body}
            <a  href={url} target='_blank' className='integration-link'>
                <img src={handleUrl(images.github)} alt='github' />
            </a>
        </li>
    )
}

export default Integration