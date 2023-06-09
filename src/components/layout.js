/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// import { Header } from 'det-header-test'

import SiteHeader from "./siteheader"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SiteHeader siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>
            <div style={{color: `red`, border: `4px solid red`, padding: `10px`, marginBottom: `1em`, fontSize: `2rem`, lineHeight: `2.5rem`, fontWeight: `bolder`}}>
              This site is deprecated, please go to <a href="https://detroitrestaurantinspections.netlify.app/">detroitrestaurantinspections.netlify.app</a> to view the maintained site.
            </div>
            {children}
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
