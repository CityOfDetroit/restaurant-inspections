import React, { Component } from "react"
import { Link } from "gatsby"
import { Menu } from "semantic-ui-react"

class Nav extends Component {
  state = { }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Link to="/">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            HOME
          </Menu.Item>
        </Link>
        <Link to="/about">
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
            ABOUT
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}

export default Nav
