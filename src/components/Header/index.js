import React, { Component } from "react"

import { Link } from "react-router-dom"

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
