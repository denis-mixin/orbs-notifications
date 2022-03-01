import React from 'react'
import animations from '../../../assets/js/animations';
import images from '../../../assets/js/images';

function Alerts({ _relativeURL, _ID, _body }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className='alerts'>
            <div className='alerts-grid'>
                <div className='alerts-description' data-aos={animations.fadeUp}>
                    <img src={handleUrl(images.orbsLogoWithText)} className='alerts-description-logo' alt='orbs-logo' />
                    <section className='alerts-description-body'>
                        {_body}
                    </section>
                </div>
                <section className='alerts-right' data-aos={animations.fadeUp}>
                    <img src={handleUrl(images.alertsHero)} className='alerts-right-hero' alt='hero' />

                    <img src={handleUrl(images.orbsLogo)} className='alerts-right-logo' id='alerts-logo-1' alt='orbs logo' />
                    <img src={handleUrl(images.orbsLogo)} className='alerts-right-logo' id='alerts-logo-2' alt='orbs logo' />
                    <img src={handleUrl(images.orbsLogo)} className='alerts-right-logo' id='alerts-logo-3' alt='orbs logo' />
                    <img src={handleUrl(images.orbsLogo2)} className='alerts-right-logo' id='alerts-logo-4' alt='orbs logo' />
                </section>
            </div>
        </div>
    )
}

export default Alerts