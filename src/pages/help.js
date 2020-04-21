import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HelpPage = () => (
  <Layout>
    <SEO title="How I can help" />
    <h1>Hi from the How I can help page</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, quidem vel? Quae nemo nobis distinctio architecto facilis quas fuga accusamus aspernatur. Illum soluta dolor sunt pariatur impedit ad asperiores dolorem?</p>
    <p>Welcome to How I can help page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default HelpPage
