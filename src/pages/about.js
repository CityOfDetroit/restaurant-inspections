import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`about`, `detroit`, `restaurant`, `inspections`]} />
    <h1>About</h1>
    <p>Explain things about restaurant inspections open data</p>
    <Link to="/">Go to Homepage</Link>
  </Layout>
)

export default AboutPage
