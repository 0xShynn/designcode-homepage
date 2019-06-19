/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "../styles/layout.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <main>{children}</main>
        <Footer data={data}>
          Backgrounds made in Cinema 4D, iOS app in Swift, site in React. Email
          us to ask anything. © 2018 - Terms of Service - Privacy Policy.
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
