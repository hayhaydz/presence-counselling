import React from "react"

import Block from "./Block/Block"

import BlueSkyGreenFieldImg from "../../img/blue-sky-green-field.jpg"
import StonehengeImg from "../../img/stonehenge.jpg"
import RunningWater from "../../img/running-water.jpg"
import WoodlandPath from "../../img/woodland-path.jpg"

const Blocks = () => {
  return (
    <section className="Blocks">
      <h1 className="Blocks__heading">What can I do for you?</h1>
      <Block
        img={StonehengeImg}
        alt="Blue sky with large whispy clouds above a green field wiht trees and hedges"
        text="Are you struggling with how to keep your head above the waves? Wanting to see new possibilities for your life? Perhaps you are concerned about your child? I have experience working with adults and teenagers and am able to build a nurturing relationship using care and respect. I believe it is the relationship between therapist and client that brings healing."
      />
      <Block
        img={BlueSkyGreenFieldImg}
        alt="Large boulder in the foreground with stonehenge in the distance behind"
        text="I am a qualified, professional counsellor registered with BACP offering a safe presence in your time of need. I’m a warm and empathic listener able to offer hope and interested in accompanying you through whatever issue you face. I like to work with you as a whole person; often strong emotions stem from something that has happened to you."
      />
      <Block
        img={RunningWater}
        alt="Water rushing through a stream with trees either side forming a canopy"
        text="It’s so important you feel able to be yourself. I can help you discover who you truly are. Take the first step on your journey to freedom and wholeness. I am currently offering video counselling online, instant messaging, telephone counselling and more recently back to face-to-face counselling."
      />
      <h1 className="Blocks__heading">My experience</h1>
      <Block
        img={WoodlandPath}
        alt=""
        text="For over twenty years I have worked with adolescents in various contexts I have worked with issues such as depression, anxiety, self harm, rejection, grief, loss, trauma, low self esteem, loneliness, addiction and relationships."
        // As a mediator when young people are at risk of homelessness. When the relationship between parent and young person has fractured. I have offered emotional support for young people aged 16-25; including for those struggling with substance addiction. I have been counselling adolescents for seven years; face to face and online. I have been counselling adults face to face for five years.
      />
    </section>
  )
}
export default Blocks
