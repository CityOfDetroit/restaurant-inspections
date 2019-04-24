import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchEstablishments from "../components/search"
import Citation from "../components/citation"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`restaurant`, `inspections`, `detroit`]} />
      <section style={{ fontSize: '1.25em', fontWeight: 600, marginBottom: '1.25em' }}>
        Explore information about restaurant inspections in the City of Detroit
      </section>
      <section style={{ fontSize: '1em', marginBottom: '2em' }}>
        Start typing below to find restaurants and other food service establishments, like school cafeterias and stadium concessions, that are inspected by the Detroit Health Department or click <Link to="/about">ABOUT</Link> to learn more. 
      </section>
      <section style={{ marginBottom: '1.25em' }}>
        <SearchEstablishments source={data.postgres.establishments} />
      </section>
      <Citation />
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
