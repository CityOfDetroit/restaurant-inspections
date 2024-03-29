import React from "react"
import { Link } from "gatsby"
import { Image, Header } from "semantic-ui-react"
//import PropTypes from "prop-types"
import _ from "lodash"

import  logo  from "../images/cod-logo.jpg"

const SiteHeader = ({ siteTitle }) => (
  <header style={{ borderBottom: `5px solid #feb70d`, marginBottom: `1.5rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1rem 1rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, alignContent: `middle`, flexWrap: `wrap` }}>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <div style={{ width: `70px` }}>
          <a href="https://detroitmi.gov/" target='_blank' rel='noopener noreferrer'>
            <Image src={logo} style={{ padding: 0, margin: 0, width: `100%`, height: `auto` }} alt="city of detroit logo" />
          </a>
        </div>
        <Link to="/" style={{ color: `black`, textDecoration: `none`, textAlign: `right` }}>
          <Header as='h2'>{_.toUpper(siteTitle)}</Header>
        </Link>
      </div>
      <Link to="/" style={{ color: `#004445`, textDecoration: `none`, marginLeft: `auto`, marginRight: `3em` }}>
        HOME
      </Link>
      <Link to="/about" style={{ color: `#004445`, textDecoration: `none` }}>
        ABOUT
      </Link>
    </div>
  </header>
)

/* Header.propTypes = {
  sitetitle: PropTypes.string,
}

Header.defaultProps = {
  sitetitle: ``,
} */

export default SiteHeader
