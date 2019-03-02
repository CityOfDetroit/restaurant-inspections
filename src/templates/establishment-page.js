import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

export default ({ data }) => {
  const e = data.postgres.establishment[0];

  return (
    <Layout>
      <div>
        <h2>{e.name}</h2>
        <p>{e.establishmentid}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($eid: String!) {
    postgres {
      establishment: allEstablishmentsList(condition: {establishmentid: $eid}) {
        establishmentid
        name
        address
        zipcode
        owner
        licenseNumber
        licenseType
        mostRecentLicenseDate
        establishmentType
        establishmentStatus
        riskCategory
        reviewFrequencyDays
        geom
        inspectionsByEstablishmentidList {
          inspectionid
          establishmentid
          name
          inspectionDate
          inspectionType
          inspectorid
          pcount
          pfcount
          ccount
          criticalcount
          noncritical
          correctedcritical
          inCompliance
          violationsByInspectionidList {
            inspectionid
            inspectionDate
            inspectionType
            establishmentid
            name
            violationCode
            violationDescription
            violationType
            criticalViolationType
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
`;
