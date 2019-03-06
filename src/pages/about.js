import React from "react"
import { graphql } from "gatsby"
import { Header, Divider, Statistic } from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const stats = [
    { key: 'establishments', label: 'Establishments', value: `${data.postgres.allEstablishments.totalCount.toLocaleString()}`, color: 'violet'},
    { key: 'inspections', label: 'Inspections', value: `${data.postgres.allInspections.totalCount.toLocaleString()}`, color: 'purple'},
    { key: 'violations', label: 'Violations', value: `${data.postgres.allViolations.totalCount.toLocaleString()}`, color: 'pink'},
  ]

  return (
    <Layout>
      <SEO title="About" />
      <Header as='h1'>About</Header>
      <Divider />
      <Header as='h2'>What's in this data?</Header>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Statistic.Group items={stats} />
      </section>
      <Divider />
      <Header as='h2'>Frequently Asked Questions</Header>
    </Layout>
  )
}

export const query = graphql`
 query AboutPageQuery {
  postgres {
    allEstablishments {
      totalCount
    }
  }
  postgres {
    allInspections {
      totalCount
    }
  }
  postgres {
    compliantInspections: allInspections(condition: {inCompliance: "Yes"}) {
      totalCount
    }
  }
  postgres {
    allViolations {
      totalCount
    }
  }
  postgres {
    seriousViolations: allViolations(filter: {violationType: {in: ["Priority", "Foundation"]}}) {
      totalCount
    }
  }
}
`

export default AboutPage
