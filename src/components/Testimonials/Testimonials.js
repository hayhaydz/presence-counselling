import React, { useLayoutEffect, useState } from 'react'
import { window } from 'browser-monads'
import Carousel from 'nuka-carousel'


const Testimonials = () => {
  let mediaQueryList = [window.matchMedia('(min-width: 960px)'), window.matchMedia('(max-width: 960px)'), window.matchMedia('(max-width: 520px)')]
  const [slideNumber, setSlideNumber] = useState(3)

  useLayoutEffect(() => {
    const sizeChange = () => {
      

      if(mediaQueryList[1].matches) {
        setSlideNumber(2)
      } 

      if(mediaQueryList[2].matches) {
        setSlideNumber(1)
      }

      if(mediaQueryList[0].matches) {
        setSlideNumber(3)
      }
    }
    
    window.addEventListener('resize', sizeChange)
    sizeChange()
    return () => window.removeEventListener('resize', sizeChange)
  }, [])

  const params = {
    cellSpacing: 25,
    wrapAround: true,
    autoplay: true,
  }
  const testimonials = [
    '"Thank you for always listening to me. I never say it, but thank you. You\'ve helped me in more ways than you will ever know. Thank you for listening and understanding me and for always being there for me." M',
    '"It really felt like you understood everything I said and I’ve not had that before. It made it easier to talk. Thanks for being real." T',
    '"Thank you susie for being so kind and very understanding if it wasn’t for talking to you I don’t think I would of had the confidence to get myself out of that negative situation." C',
    '"Thanks Susie. Just wanted to say thanks for the support. You really helped me a lot." V',
    '"Susie has the wonderful, and not so common, ability to ‘see’ you and ‘hear’ you like very few others I know. I have known Susie and been a part of her work for a number of years now and have every confidence in her extraordinary skills as a counsellor."',
    '"When I think of Susie the three words that come to mind summing her up are nurturing, perceptive and gifted." AJ'
  ]

  return (
    <section className="Testimonials">
        <h1 className="Testimonials__heading">What people have had to say about me.</h1>
        <Carousel 
          {...params}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          slidesToShow={slideNumber}
        >
            {testimonials.map((testimonial, index) => {
              return <div key={index} ><p className="slider-slide-text">{testimonial}</p></div>
            })}
        </Carousel>
    </section>
  )
}
export default Testimonials
