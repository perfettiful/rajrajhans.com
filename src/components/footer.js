import React, { Component } from "react"
import Logo from "./header/logo"
import NavLinks from "./header/navLinks"
import { Link } from "gatsby"
import "../styles/footer.scss"
import {FooterWave} from "./icons"

class FooterLinks extends Component {
  render() {
    return (
      <ul>
        Footer Links here
      </ul>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{background:<FooterWave/>}}>
        <div className="container">
          <div className="logo">
            <Link to="/" title={"Raj Rajhans"}>
              <Logo />
            </Link>
          </div>
          <div className="navlinks text-secondary">
            <NavLinks />
          </div>
          <div
            className="navlinks text-secondary"
            style={{ marginTop: "20px" }}
          >
            <FooterLinks />
          </div>
          <p className="text-primary f-d">
            Copyright &copy; Raj Rajhans{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer