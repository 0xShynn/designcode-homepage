import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import "../styles/header.scss"

class Header extends Component {
  state = { hasScrolled: false }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "header headerScrolled" : "header"}
      >
        <div className="headerGroup">
          <Link to="/">
            <img
              src={require("../images/logo-designcode.svg")}
              alt=""
              width="30"
            />
          </Link>
          <Link to="/">Courses</Link>
          <Link to="/">Download</Link>
          <Link to="/">Workshops</Link>
          <Link to="/">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
