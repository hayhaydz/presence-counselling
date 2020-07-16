import React from "react"

import Block from "./Block/Block"

import BlueSkyGreenFieldImg from "../../img/blue-sky-green-field.jpg"
import StonehengeImg from "../../img/stonehenge.jpg"
import RunningWater from "../../img/running-water.jpg"
import WoodlandPath from "../../img/woodland-path.jpg"
import WaterfallWoodland from "../../img/waterfall-woodland.jpg"

const Blocks = () => {
  return (
    <section className="Blocks">
      <h1 className="Blocks__heading">What can I do for you?</h1>
      <Block
        img={BlueSkyGreenFieldImg}
        alt="Blue sky with large whispy clouds above a green field wiht trees and hedges"
        text="Are you struggling with how to keep your head above the waves? Wanting to see new possibilities for your life? Perhaps you are concerned about your child? I have experience working with adults and teenagers and am able to build a nurturing relationship using care and respect. I believe it is the relationship between therapist and client that brings healing."
      />
      <Block
        img={StonehengeImg}
        alt="Large boulder in the foreground with stonehenge in the distance behind"
        text="I can offer a safe presence in your time of need. I’m a warm and empathic listener able to offer hope and interested in accompanying you through whatever issue you face. I like to work with you as a whole person; often strong emotions stem from something that has happened to you."
      />
      <Block
        img={RunningWater}
        alt="Water rushing through a stream with trees either side forming a canopy"
        text="It’s so important you feel able to be yourself. I can help you discover who you truly are. Take the first step on your journey to freedom and wholeness. I am currently offering video counselling online, instant messaging and telephone counselling."
      />
      <h1 className="Blocks__heading">My experience</h1>
      <Block
        img={WoodlandPath}
        alt=""
        text="For over 20 years I have worked with adolescents in various contexts; from mediation between parents and young people who are at risk of homelessness due to relationship breakdown to emotional support (including substance addiction) and helping to lead a youth club."
      />
      <Block
        img={WaterfallWoodland}
        alt=""
        text="I have 7 years of experience counselling adolescents. 3 and a half years face to face counselling in high schools. In addition I have 3 years counselling and emotional well being practitioner experience online (via live chat message and email support) with young people aged 12 to 23 years of age. I have been counselling adults for 5 years in a face to face setting."
      />
    </section>
  )
}
export default Blocks
