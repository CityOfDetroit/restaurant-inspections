import React from "react";
import { graphql } from "gatsby";
import { Header, Container, Table, Divider, Icon, Message, Popup } from 'semantic-ui-react';

import Inspection from '../components/inspection';
import Layout from "../components/layout";
import metadata from '../data/metadata';

export default ({ data }) => {
  const e = data.postgres.establishment[0];

  return (
    <Layout>
      <Header as='h2'>
          {e.name}
          <Header.Subheader>{e.address}</Header.Subheader>
        </Header>
        <Divider />
        <Container fluid>
          <Header as='h3'>{e.establishmentType}</Header>
          <Table basic='very' celled striped>
            <Table.Body>
              <Table.Row className={e.establishmentStatus === "Open" ? 'positive' : ''}>
                <Table.Cell>
                  <strong>Status</strong>
                </Table.Cell>
                <Table.Cell>
                  {!e.establishmentStatus ? 'Unknown' : e.establishmentStatus}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>License Type</strong>
                </Table.Cell>
                <Table.Cell>
                  {e.licenseType}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>State License Number</strong>
                </Table.Cell>
                <Table.Cell>
                  {e.licenseNumber}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Owner</strong>
                </Table.Cell>
                <Table.Cell>
                  {e.owner}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Complexity level</strong>
                </Table.Cell>
                <Table.Cell>
                  {!e.riskCategory ? 'Unknown' : e.riskCategory}
                  <span style={{ marginLeft: '.5em' }}>
                    <Popup wide size='tiny' trigger={<Icon circular name='question' size='small' color='grey' />}>
                      {metadata.risks[`${e.riskCategory}`]}
                    </Popup>
                  </span>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Review frequeny</strong>
                </Table.Cell>
                <Table.Cell>
                  {Math.round(e.reviewFrequencyDays) === 0 ? `Unknown` : `Every ${Math.round(e.reviewFrequencyDays)} days`}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
        <Divider />
        <Container fluid>
          <Header as="h3">
            {e.inspectionsByEstablishmentidList.length} Inspections
            <Header.Subheader>Since 8-1-2016</Header.Subheader>
          </Header>
          <Inspection data={e.inspectionsByEstablishmentidList} />
          <Message visible size='small'>
            <Message.Header>About this data</Message.Header>
            A restaurant is <strong>compliant</strong> <Icon name='check' color='green' />when zero Priority or Priority Foundation violations are found during an inspection or when all Priority and Priority Foundation violations are corrected; Core violations are not required to be corrected. To learn more about individual violations cited, reference Michigan's Food Code <a href={metadata.foodCodeLink}>here</a>.
          </Message>
        </Container>
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
        owner
        licenseNumber
        licenseType
        establishmentType
        establishmentStatus
        riskCategory
        reviewFrequencyDays
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
`;
