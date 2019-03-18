import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header style={{ borderBottom: `4px solid #feb70d`, marginBottom: `1.5rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1rem 1rem`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <Link to="/" style={{ color: `black`, textDecoration: `none` }}>
        <h1>{siteTitle}</h1>
      </Link>
      <Link to="/about" style={{ color: `black`, textDecoration: `none` }}>
        <span>ABOUT</span>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
