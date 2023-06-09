import React from "react"
import { Header } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../components/faq"

import metadata from '../data/metadata'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Header as='h1'>About</Header>
      <p>
        This site provides information about food safety inspections in the City of Detroit. 
      </p>
      <p>
        The data includes restaurants and other food service establishments, like school cafeterias and stadium concessions, that are inspected by the <a href={metadata.links.dhd.url} target='_blank' rel='noopener noreferrer'>{metadata.links.dhd.display}</a>. 
      </p>
      <p>
        Grocery stores, liquor stores, and other packaged food establishments are inspected by the <a href={metadata.links.mdard.url} target='_blank' rel='noopener noreferrer'>{metadata.links.mdard.display}</a> and are not included here.
      </p>
      <p>
        If a restaurant, bar, or other food service establishment that prepares or serves food and beverages in Detroit is not found in this data, please email <a href={metadata.links.dhdEmail.url} target='_blank' rel='noopener noreferrer'>{metadata.links.dhdEmail.display}</a> or call <a href={metadata.links.dhdPhone.url} target='_blank' rel='noopener noreferrer'>{metadata.links.dhdPhone.display}</a> for follow up. Please include the name and address of the establishment, and the date and time of your visit in your message.
      </p>
      
      <Header as='h2'>Frequently Asked Questions</Header>
      <Header as='h4'>About the data</Header>
      <FAQ data={metadata.faqs_data} />
      <Header as='h4'>About the inspection process</Header>
      <FAQ data={metadata.faqs_process} />

      <Header as='h2'>Share Feedback</Header>
      <p>
        This site is built by the <a href={metadata.links.odt.url} target='_blank' rel='noopener noreferrer'>{metadata.links.odt.display}</a> team at the City of Detroit in partnership with the Detroit Health Department using <a href={metadata.links.openData.url} target='_blank' rel='noopener noreferrer'>{metadata.links.openData.display}</a>. Our code is on <a href={metadata.links.git.url} target='_blank' rel='noopener noreferrer'>{metadata.links.git.display}</a>.
      </p>
      <p>
        Have an idea or question? Use <a href={metadata.links.feedbackForm.url} target='_blank' rel='noopener noreferrer'>{metadata.links.feedbackForm.display}</a> to get in touch with our project team or email <a href={metadata.links.dhdEmail.url} target='_blank' rel='noopener noreferrer'>{metadata.links.dhdEmail.display}</a>.
      </p>
      <br />
    </Layout>
  )
}

export default AboutPage
