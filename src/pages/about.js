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
        This data includes restaurants and other food service establishments, like school cafeterias or stadium concessions, that are inspected by the Detroit Health Department (DHD). Grocery stores, convenience stores, and other packaged and raw food establishments are inspected by the Michigan Department of Agriculture and Rural Development (MDARD) and are not included here.
      </p>
      <p>
        If a restaurant, bar, or other food service establishment that prepares or serves food and beverages in Detroit is not found in this data, please email <a href="mailto:foodsafety@detroitmi.gov">foodsafety@detroitmi.gov</a> or call 313-876-0135 for follow up. Please include the name and address of the establishment, and the date and time of your visit in your message.
      </p>
      
      <Header as='h2'>Frequently Asked Questions</Header>
      <Header as='h4'>About the data</Header>
      <FAQ data={metadata.faqs_data} />
      <Header as='h4'>About the inspection process</Header>
      <FAQ data={metadata.faqs_process} />
      
      <Header as='h2'>DHD Immunization Clinic</Header>
      <p>
        The Detroit Health Department recommends that all food establishments located in Detroit make arrangements for their food workers to get vaccinated against Hepatitis A. Food workers include those who work at restaurants, bars, fast food establishments, coney islands, and delis. Restaurant owners or managers may call DHD to arrange employee vaccinations at 313-410-8142.
      </p>
      <p>
        Individuals may also contact or visit the Detroit Health Department Immunization Clinic to receive a Hepatitis A vaccination and discuss with a healthcare professional why it's important. To learn more about Hepatits A, visit <a href="https://detroitmi.gov/health">detroitmi.gov/health</a>. 
      </p>
      <p>
       <strong>Detroit Immunization Clinic</strong><br />
        Samaritan Center - Ford Wellness Center Suite 107 <br />
        555 Conner Street <br />
        Detroit, MI 48213 <br />
        313-410-8142
      </p>
      <p>
        <strong>Clinic hours:</strong><br />
        Monday, Tuesday, Thursday, Friday: 8am - 5pm <br />
        Wednesday: 9am - 6pm <br />
        Saturday: 10am - 4pm <br />
      </p>

      <Header as='h2'>Share Feedback</Header>
      <p>
        This site is built by the Innovation & Emerging Technology team at the City of Detroit in partnership with the Detroit Health Department using open data. Our code is on <a href="https://github.com/CityOfDetroit/restaurant-inspections">GitHub</a>.
      </p>
      <p>
        Have an idea or question? Use <a href="https://app.smartsheet.com/b/form/078ffe2b874a4d55bb642cfbf5657056">this form</a> to get in touch with us or email <a href="mailto:foodsafety@detroitmi.gov">foodsafety@detroitmi.gov</a>.
      </p>
      <br />
    </Layout>
  )
}

export default AboutPage
