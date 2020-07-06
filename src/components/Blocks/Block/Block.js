import React from 'react'

const Block = ({img, alt, text}) => {
    return (
        <section className="Block" data-sal="fade" data-sal-duration="1500" >
            <img src={img} className="Block__img" alt={alt}/>
            <p className="Block__text">{text}</p>
        </section>
    )
}
export default Block