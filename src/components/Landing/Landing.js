import React from 'react'

import goldenFieldImg from '../../img/golden-field.jpg'

const Landing = () => {
    return (
        <section className="Landing">
            <div className="Landing__left">
                <h1 className="Landing__left--heading">A safe <span className="Landing__left--heading--highlight">presence</span> in your time of need</h1>
                <p>Feel free to contact me here</p>
                <a href="mailto:office@presencecounselling.co.uk" title="Click to email">office@presencecounselling.co.uk</a>
                <a href="tel:+447958794265" title="Click to dial">+44 (0)7958 794265</a>
            </div>
            <div className="Landing__right">
                <img src={goldenFieldImg} alt=""/>
            </div>
        </section>
    )
}
export default Landing