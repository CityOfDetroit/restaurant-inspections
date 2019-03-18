import React from "react"
import { Header } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../components/faq"

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
      <FAQ />
    </Layout>
  )
}

// export const query = graphql`
//  query AboutPageQuery {
//   postgres {
//     allEstablishments {
//       totalCount
//     }
//   }
//   postgres {
//     allInspections {
//       totalCount
//     }
//   }
//   postgres {
//     compliantInspections: allInspections(condition: {inCompliance: "Yes"}) {
//       totalCount
//     }
//   }
//   postgres {
//     allViolations {
//       totalCount
//     }
//   }
//   postgres {
//     seriousViolations: allViolations(filter: {violationType: {in: ["Priority", "Foundation"]}}) {
//       totalCount
//     }
//   }
// }
// `

export default AboutPage
