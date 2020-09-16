import React, { Component } from "react"
import Container from "../Container"
import { Link } from "gatsby"
import Logo from "./Logo"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <header className="header__container">
        <Container>
          <div className="header">
            <h2>
              <Link to="/">
                <Logo size="55" />
              </Link>
            </h2>
            <nav className="navbar">
              <ul>
                <li>
                  <Link activeClassName="active" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active" to="events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link activeClassName="active" to="team">
                    Team
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    )
  }
}

export default Navbar
