import React from "react"
import { graphql } from "gatsby"
import { Container } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchEstablishments from "../components/search"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`restaurant`, `inspections`, `detroit`]} />
      <section style={{ fontSize: '1.25em', marginBottom: '1.5em' }}>
        <p>
          Explore information about restaurant inspections made available through Detroit's open data portal.
        </p>
        <p>
          This data includes restaurants and other food service establishments, like school cafeterias or stadium concessions, that are inspected by the Detroit Health Department.
        </p>
      </section>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <SearchEstablishments source={data.postgres.establishments} />
      </section>
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
