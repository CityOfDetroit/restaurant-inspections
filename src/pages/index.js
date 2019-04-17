import React from "react"
import { graphql } from "gatsby"
import { Header } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchEstablishments from "../components/search"
import FAQ from "../components/faq"

import metadata from '../data/metadata'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`restaurant`, `inspections`, `detroit`]} />
      <section style={{ fontSize: '1.25em', fontWeight: 600, marginBottom: '1.25em' }}>
        Explore information about restaurant inspections from the Detroit Health Department
      </section>

      <section style={{ marginBottom: '1.25em' }}>
        <SearchEstablishments source={data.postgres.establishments} />
      </section>

      <p>
        This site provides information about food safety inspections in the City of Detroit. 
      </p>
      <p>
        The data includes restaurants and other food service establishments, like school cafeterias and stadium concessions, that are inspected by the <a href={metadata.links.dhd.url}>{metadata.links.dhd.display}</a>. 
      </p>
      <p>
        Grocery stores, liquor stores, and other packaged food establishments are inspected by the <a href={metadata.links.mdard.url}>{metadata.links.mdard.display}</a> and are not included here.
      </p>
      <p>
        If a restaurant, bar, or other food service establishment that prepares or serves food and beverages in Detroit is not found in this data, please email <a href={metadata.links.dhdEmail.url}>{metadata.links.dhdEmail.display}</a> or call <a href={metadata.links.dhdPhone.url}>{metadata.links.dhdPhone.display}</a> for follow up. Please include the name and address of the establishment, and the date and time of your visit in your message.
      </p>
      
      <Header as='h2'>Frequently Asked Questions</Header>
      <Header as='h4'>About the data</Header>
      <FAQ data={metadata.faqs_data} />
      <Header as='h4'>About the inspection process</Header>
      <FAQ data={metadata.faqs_process} />

      <Header as='h2'>Share Feedback</Header>
      <p>
        This site is built by the <a href={metadata.links.iet.url}>{metadata.links.iet.display}</a> team at the City of Detroit in partnership with the Detroit Health Department using <a href={metadata.links.openData.url}>{metadata.links.openData.display}</a>. Our code is on <a href={metadata.links.git.url}>{metadata.links.git.display}</a>.
      </p>
      <p>
        Have an idea or question? Use <a href={metadata.links.feedbackForm.url}>{metadata.links.feedbackForm.display}</a> to get in touch with our project team or email <a href={metadata.links.dhdEmail.url}>{metadata.links.dhdEmail.display}</a>.
      </p>
      <br />
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
