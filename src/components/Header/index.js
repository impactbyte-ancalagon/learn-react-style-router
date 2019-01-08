import React, { Component } from "react"

import styled from "styled-components"

const NavigationBar = styled.header`
  font-size: 1.5em;
  text-align: center;
`

const Title = styled.h1`
  color: palevioletred;
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
        <Title>Learn React</Title>
        <NavigationLinks>
          <li>Home</li>
          <li>About</li>
          <li>Random</li>
        </NavigationLinks>
      </NavigationBar>
    )
  }
}

export default Header
