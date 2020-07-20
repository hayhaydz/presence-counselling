import React from "react"

import PortraitImg from '../../img/portrait.jpg'
import BACPLogo from '../../img/BACP-Logo.png'
import FishLogo from '../../img/Fish-Logo.png'

const About = () => {
  return (
    <section className="About">
      <h1 className="About__heading">A bit about me</h1>
      <div className="About__container">
        <img src={PortraitImg} className="About__container--img" alt="Me" />
        <div className="About__container--right">
          <p className="About__container--text">
            I trained to be a therapist because I found others naturally seemed to
            tell me about what was upsetting them, or talk to me about issues very
            important to them, even the first time I met them. I’m very interested
            in people. I have a zest for life and I love being in the countryside,
            walking my dog and riding my horse. I have a talking budgie. I have
            two grown up children.
          </p>
          <div className="About__container--images">
            <img src={BACPLogo} className="About__container--images--img" alt="BACP Details"/>
            <img src={FishLogo} className="About__container--images--img" alt="Christian symbol of life"/>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
