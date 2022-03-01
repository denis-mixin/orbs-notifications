import React from 'react'
import animations from '../../../assets/js/animations'
import { PR_URL } from '../../../assets/js/consts'
import LinkButton from '../../components/LinkButton'

function Contribute({ title, example, bottomText }) {
    return (
        <div className='contribute'>
            <h3 className='contribute-title' data-aos={animations.fadeUp} >{title}</h3>
            {example}
            <section className='contribute-bottom' >
                <h5 data-aos={animations.fadeUp}>{bottomText}</h5>
                <span data-aos={animations.fadeUp}><LinkButton url={PR_URL} text='GitHub PR' /></span>
            </section>

        </div>
    )
}

export default Contribute