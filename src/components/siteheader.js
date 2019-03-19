import React from "react"
import { Link } from "gatsby"
import { Image, Header, Icon } from 'semantic-ui-react';
import PropTypes from "prop-types"

import  logo  from '../images/cod-logo.jpg'

const SiteHeader = ({ siteTitle }) => (
  <header style={{ borderBottom: `4px solid #feb70d`, marginBottom: `1.5rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1rem 1rem`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'middle', flexWrap: 'wrap' }}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        
        <Image src={logo} style={{padding: 0, margin: 0, height: 50}} alt='city logo'/>
      <Link to="/" style={{ color: `black`, textDecoration: `none`, textAlign: 'right' }}>
        <Header as={'h2'}>{siteTitle}</Header>
      </Link>
        </div>
      <Link to="/about" style={{ color: `black`, textDecoration: `none` }}>
        ABOUT
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

export default SiteHeader;
