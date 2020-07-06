import React from "react"

const Contact = () => {
  return (
    <section className="Contact">
      <h1 className="Contact__heading">Don’t hesitate to get in contact!</h1>
      <div className="Contact__container">
        <div className="Contact__column">
          <h3 className="Contact__subheading">Email</h3>
          <a
            href="mailto:office@presencecounselling.co.uk"
            className="Contact__link"
            title="Click to email"
          >
            office@presencecounselling.co.uk
          </a>
        </div>
        <div className="Contact__column">
          <h3 className="Contact__subheading">Call</h3>
          <a
            href="tel:+447958794265"
            className="Contact__link"
            title="Click to dial"
          >
            +44 7958 794265
          </a>
        </div>
      </div>
    </section>
  )
}
export default Contact
