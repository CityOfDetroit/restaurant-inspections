import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <h1>404 Not Found</h1>
    <p>Sorry, this page doesn't exist. <Link to="/">Go back home.</Link></p>
  </Layout>
)

export default NotFoundPage
