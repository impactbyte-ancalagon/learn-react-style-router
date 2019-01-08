import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Logo from "../Logo"

const NavigationBar = styled.header`
  font-size: 1.5em;
  text-align: center;
`

const NavigationLinks = styled.ul`
  text-decoration: none;
  li {
    display: inline-block;
    margin-right: 10px;
  }
`

class Header extends Component {
  render() {
    return (
      <NavigationBar>
        <Logo />
        <NavigationLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </NavigationLinks>
      </NavigationBar>
    )
  }
}

export default Header
