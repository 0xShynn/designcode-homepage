import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import StripeCheckout from "react-stripe-checkout"
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

  handlePurchase = token => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount,
    }

    fetch("http://localhost:9000/stripe-charge", {
      method: "POST",
      body: JSON.stringify(bodyObject),
    })
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
          <StripeCheckout
            amount={5000}
            image="https://cl.ly/0K2f1V3K3h0D/download/Logo.jpg"
            token={this.handlePurchase}
            stripeKey={process.env.GATSBY_STRIPE_KEY}
          >
            <button>Buy</button>
          </StripeCheckout>
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
