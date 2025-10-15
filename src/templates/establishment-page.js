import React from "react"
import { graphql } from "gatsby"
import { Header, Divider, Icon, Message } from "semantic-ui-react"

import Inspection from "../components/inspection"
import Layout from "../components/layout"
import Location from "../components/location"
import Establishment from "../components/establishment"
import SEO from "../components/seo"
import Citation from "../components/citation"

const EstablishmentPage = ({ data }) => {
  const e = data.postgres.establishment[0]
  const last_updated = data.postgres.maxInspectionDate[0].inspectionDate

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
      <SEO title={e.establishmentName} />

      <Header as="h2">
        {e.establishmentName}
        <Header.Subheader>{e.address}</Header.Subheader>
      </Header>
      <Divider />

      <Header as="h3">{e.establishmentType}</Header>
      <Establishment e={e} />
      <Divider />

      <Header as="h3">
        {e.inspectionsByEstablishmentIdList.length} Inspections
        <Header.Subheader>Since 8-1-2016</Header.Subheader>
      </Header>
      <Inspection data={e.inspectionsByEstablishmentIdList} />
      <Message visible size="small">
        <Message.Header>About inspections</Message.Header>
        A restaurant is <strong>compliant</strong> <Icon name="check" color="green" /> 
        when zero Priority or Priority Foundation violations are cited during an inspection, 
        or when all are corrected; Core violations will be reviewed at the next routine 
        inspection and are not required to be corrected to be in compliance.
      </Message>

      {e.coords ? <><Divider /><Location e={e} encoded={encoded} /></> : ''}

      <Citation date={last_updated} />
    </Layout>
  )
}

export const query = graphql`
  query($eid: PostGraphile_BigInt!) {
    site {
      pathPrefix
    }
    postgres {
      establishment: allEstablishmentsList(condition: { establishmentId: $eid }) {
        establishmentId
        establishmentName
        address
        zipCode
        establishmentOwner
        establishmentLicenseNumber
        establishmentLicenseType
        establishmentType
        establishmentStatus
        establishmentComplexityLevel
        numReviewFrequency
        coords
        geojson
        nearbyList(first: 20) {
          establishmentId
          establishmentName
          address
          zipCode
        }
        inspectionsByEstablishmentIdList(orderBy: INSPECTION_DATE_DESC) {
          inspectionId
          inspectionDate
          inspectionType
          isInCompliance
          violationsByInspectionIdList(orderBy: VIOLATION_TYPE_DESC) {
            violationCode
            violationDescription
            violationType
            itemDescription
            subItem
            problemDescription
            subProblem
            areaDescription
            subLocation
            isCorrected
            numDaysToCorrect
            correctedDate
            correctionDescription
          }
        }
      }
      maxInspectionDate: allInspectionsList(orderBy: INSPECTION_DATE_DESC, first: 1) {
        inspectionDate
      }
    }
  }
`
export default EstablishmentPage;