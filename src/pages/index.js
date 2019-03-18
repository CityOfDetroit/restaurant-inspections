import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchEstablishments from "../components/search"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`restaurant`, `inspections`, `detroit`]} />
      <section style={{ fontSize: '1.25em', marginBottom: '1.5em' }}>
        <p>
          Explore information about restaurant inspections from the Detroit Heatlh Department.
        </p>
      </section>
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
