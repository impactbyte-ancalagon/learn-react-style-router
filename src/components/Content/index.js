import React from "react"

import styled from "styled-components"

const mainStyle = {
  color: "yellow",
  background: "black",
  padding: "10px"
}

const Paragraph = styled.p`
  font-size: 20px;
`

const Content = () => (
  <main style={mainStyle}>
    <Paragraph>
      Learning React with Ancalagon together is better #McQueenYaQueen
    </Paragraph>
  </main>
)

export default Content
