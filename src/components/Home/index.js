import React from "react"
import styled from "styled-components"
import { Button } from "reactstrap"

import Page from "../Page"

const Paragraph = styled.p`
  font-size: 20px;
`

const Content = () => (
  <Page>
    <Paragraph>
      Learning React with Ancalagon together is better #McQueenYaQueen
    </Paragraph>
    <Button color="primary">Get Started</Button>
    <Button color="danger">Danger</Button>
  </Page>
)

export default Content
