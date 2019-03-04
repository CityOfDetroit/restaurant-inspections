import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchEstablishments from "../components/search"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <SearchEstablishments source={data.postgres.establishments} />
    </Layout>
  )
}

export const query = graphql`
 query IndexPageQuery {
  postgres {
    establishments: allEstablishmentsList {
      establishmentid
      name
      address
    }
  }
}
`

export default IndexPage
