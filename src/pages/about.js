import React from "react"
import { graphql } from "gatsby"
import { Header, Divider, Statistic, Grid, Container } from "semantic-ui-react"
import { RadialChart } from "react-vis"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const complianceData = [
    { label: 'Compliant', angle: data.postgres.compliantInspections.totalCount, color: '#21BA45' },
    { angle: data.postgres.allInspections.totalCount - data.postgres.compliantInspections.totalCount, color: '#DB2828' }
  ]

  return (
    <Layout>
      <SEO title="About" />
      <Header as='h1'>About</Header>
      <Divider />
      <Header as='h2'>What's in this data?</Header>
      <Grid columns={3} divided>
        <Grid.Column>
          <Statistic color='violet'>
            <Statistic.Value>{data.postgres.allEstablishments.totalCount.toLocaleString()}</Statistic.Value>
            <Statistic.Label>Establishments</Statistic.Label>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic color='purple'>
            <Statistic.Value>{data.postgres.allInspections.totalCount.toLocaleString()}</Statistic.Value>
            <Statistic.Label>Inspections</Statistic.Label>
          </Statistic>
          <Container>
            <RadialChart 
              height={200} 
              width={200} 
              data={complianceData}
              colorType='literal'
              innerRadius={70}
              radius={90}
              padAngle={0.04}
              showLabels />
          </Container>
        </Grid.Column>
        <Grid.Column>
          <Statistic color='pink'>
            <Statistic.Value>{data.postgres.allViolations.totalCount.toLocaleString()}</Statistic.Value>
            <Statistic.Label>Violations</Statistic.Label>
          </Statistic>
        </Grid.Column>
      </Grid>
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
