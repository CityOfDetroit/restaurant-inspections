import React from "react"
import { Link } from "gatsby"
import { Image, Header, Icon } from 'semantic-ui-react';
import PropTypes from "prop-types"

import  logo  from '../images/cod-logo.jpg'

const SiteHeader = ({ siteTitle }) => (
  <header style={{ borderBottom: `4px solid #feb70d`, marginBottom: `1.5rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1rem 1rem`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'middle', flexWrap: 'wrap' }}>
      <Image src={logo} size={window.innerWidth > 768 ? 'tiny' : 'mini'} style={{padding: 0, margin: 0}} alt='city logo'/>
      <Link to="/" style={{ color: `black`, textDecoration: `none` }}>
        <Header as={window.innerWidth > 768 ? 'h1' : 'h3'}>{window.innerWidth > 768 ? siteTitle : siteTitle.replace('Detroit', '')}</Header>
      </Link>
      <Link to="/about" style={{ color: `black`, textDecoration: `none` }}>
        {window.innerWidth > 768 ? <span>ABOUT</span> : <Icon name='help circle' size='large' />}
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
