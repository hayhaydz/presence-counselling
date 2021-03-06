import React from "react"
import Blob from './Blob/Blob'

const Landing = () => {
  return (
    <section className="Landing">
      <div className="Landing__left">
        <h1 className="Landing__left--heading">
          A safe{" "}
          <span className="Landing__left--heading--highlight">presence</span> in
          your time of need
        </h1>
        <p className="Landing__left--subheading">Feel free to contact me here</p>
        <a
          href="mailto:office@presencecounselling.co.uk"
          className="Landing__left--link"
          title="Click to email"
        >
          office@presencecounselling.co.uk
        </a>
        <a 
            href="tel:+447958794265"
            className="Landing__left--link"
            title="Click to dial"
        >
          +44 7958 794265
        </a>
      </div>
      <div className="Landing__right">
        <Blob classes="Blob" />
      </div>
    </section>
  )
}
export default Landing
