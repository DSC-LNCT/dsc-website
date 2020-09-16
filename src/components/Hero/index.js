import React from "react"
import Container from "../Container"

const Hero = ({ title, description }) => {
  return (
    <Container>
      <div className="hero">
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <Link className="cta" to={cta.url}>
          {cta.text}
        </Link> */}
      </div>
    </Container>
  )
}

export default Hero
