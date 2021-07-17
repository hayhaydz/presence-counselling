import React from "react"

const Details = () => {
  return (
    <section className="Details">
      <h1 className="Details__heading">The Details</h1>
      <div className="Details__container">
        <div className="Details__left">
          <h3 className="Details__subheading">What is counselling?</h3>
          <p className="Details__text">
            When life’s storms come, counselling can help you learn to walk
            above your circumstances or to come to terms with loss and find
            acceptance in times of change.
          </p>
          <p className="Details__text">
            As a trained and qualified professional I am able to offer you the opportunity to
            explore your thoughts and feelings in a safe, confidential place.
          </p>
        </div>
        <div className="Details__right">
          <h3 className="Details__subheading">The agreement</h3>
          <p className="Details__text">
            I can offer short term sessions whilst you navigate a transition in
            life or look at a particular set of circumstances.
          </p>
          <p className="Details__text">
            I can offer longer term sessions if you would like to explore your
            life in a deeper way to find new meaning and purpose.
          </p>
          <p className="Details__text">
            Sessions are 50 minutes usually weekly initially and payment by BACS
            is required prior to each session.
          </p>
          <p className="Details__text">Cost per session is £40</p>
          <p className="Details__text">I offer one <b>free</b> 20 minute telephone assessment.</p>
        </div>
      </div>
    </section>
  )
}
export default Details
