import React from "react"

import Header from "../Header"
import Footer from "../Footer"

const mainStyle = {
  color: "yellow",
  background: "black",
  padding: "10px"
}

const Page = props => (
  <div>
    <Header />
    <main style={mainStyle}>{props.children}</main>
    <Footer />
  </div>
)

export default Page
