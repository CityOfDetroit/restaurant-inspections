import React from "react"
import { graphql } from "gatsby"
import { Header, Container, Divider, Icon, Message } from "semantic-ui-react"

import Inspection from "../components/inspection"
import Layout from "../components/layout"
import Location from "../components/location"
import Establishment from "../components/establishment"
import SEO from "../components/seo"

export default ({ data }) => {
  const e = data.postgres.establishment[0]

  // make geojson and encode for use in Mapbox Static API
  let json = {
    type: "Feature",
    geometry: e.geojson.geometry,
    properties: {
      "marker-symbol": "restaurant",
      "marker-color": "#ace",
      "fill-opacity": 0.8,
    },
  }
  let encoded = encodeURIComponent(JSON.stringify(json))

  return (
    <Layout>
      <SEO title={e.name} />

      <Header as="h2">
        {e.name}
        <Header.Subheader>{e.address}</Header.Subheader>
      </Header>
      
      <Divider />
      <Container fluid>
        <Header as="h3">{e.establishmentType}</Header>
        <Establishment e={e} />
      </Container>
      
      <Divider />
      <Container fluid>
        <Header as="h3">
          {e.inspectionsByEstablishmentidList.length} Inspections
          <Header.Subheader>Since 8-1-2016</Header.Subheader>
        </Header>
        <Inspection data={e.inspectionsByEstablishmentidList} />
        <Message visible size="small">
          <Message.Header>About inspections</Message.Header>A restaurant is{" "}
          <strong>compliant</strong> <Icon name="check" color="green" />
          when zero Priority or Priority Foundation violations are found during
          an inspection or when all P and PF violations
          are corrected; Core violations are not required to be corrected.
        </Message>
      </Container>

      {e.coords ? <Divider /> : ''}
      <Container fluid>
        {e.coords ? <Location e={e} encoded={encoded} /> : ''}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($eid: String!) {
    site {
      pathPrefix
    }
    postgres {
      establishment: allEstablishmentsList(
        condition: { establishmentid: $eid }
      ) {
        establishmentid
        name
        address
        zipcode
        owner
        licenseNumber
        licenseType
        establishmentType
        establishmentStatus
        riskCategory
        reviewFrequencyDays
        coords
        geojson
        nearbyList(first: 20) {
          establishmentid
          name
          address
          zipcode
        }
        inspectionsByEstablishmentidList {
          inspectionid
          inspectionDate
          inspectionType
          inCompliance
          violationsByInspectionidList(orderBy: VIOLATION_TYPE_DESC) {
            violationCode
            violationDescription
            violationType
            itemDescription
            subItem
            problemDescription
            subProblem
            location
            subLocation
            corrected
            daysToCorrect
            correctedDate
            correctionDescription
          }
        }
      }
    }
  }
`