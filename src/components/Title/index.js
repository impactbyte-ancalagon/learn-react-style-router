import React from "react"

import styled from "styled-components"

const Heading = styled.h2`
  color: palevioletred;
`

const Title = props => <Heading>{props.children}</Heading>

export default Title
