import React from 'react'
import animations from '../../../assets/js/animations'
import { PR_URL } from '../../../assets/js/consts'
import LinkButton from '../../components/LinkButton'

function Integrations({ list, title, prText }) {
    return (
        <div className='integrations'>
            <h3 className='integrations-title' data-aos={animations.fadeUp}>{title}</h3>
            <ul className='integrations-list'>
                {list}
                <li data-aos={animations.fadeUp} className='integration' id='integration-pr'>
                    <p>{prText}</p>
                    <LinkButton text='GitHub PR' url={PR_URL} />

                </li>
            </ul>
        </div>
    )
}

export default Integrations