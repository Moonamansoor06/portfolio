import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Moona Mansoor</h1>
    <p>A freelance web developer</p>
    <p>Also a graphic designer capable of designing and edit nice graphics for 
      the websites along with all kinds of office stationery and marketind material

    </p>
    <div style={{  marginBottom: `1.45rem`, color: 'blue',margin: `3rem auto`, maxWidth: 600 }}>
      <img src = '../images/woman-developer-laptop-macbook.jpg'></img>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
