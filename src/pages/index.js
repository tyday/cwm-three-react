import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import HomepageCard1 from "../components/homepageCard1"

const IndexPage = () => (
  <Layout isIndex={true}>
    <SEO title="Home" />
    <h3>Deep Insights.</h3>
    <h3>Long-Term Goal Acquisition.</h3>
    <h3>No Bullshit.</h3>
    <HomepageCard1 />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
