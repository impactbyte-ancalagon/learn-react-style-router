import React from "react"
import styled from "styled-components"
import { Button } from "reactstrap"

import Page from "../Page"

const mainStyle = {
  color: "yellow",
  background: "black",
  padding: "10px"
}

const Paragraph = styled.p`
  font-size: 20px;
`

const Content = () => (
  <Page>
    <main style={mainStyle}>
      <Paragraph>
        Learning React with Ancalagon together is better #McQueenYaQueen
      </Paragraph>
      <Button color="primary">Get Started</Button>
      <Button color="danger">Danger</Button>
    </main>
  </Page>
)

export default Content
