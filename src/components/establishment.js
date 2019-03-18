import React from "react"
import { Table, Popup, Icon } from "semantic-ui-react"
import metadata from "../data/metadata"

const Establishment = ({ e }) => (
  <Table basic="very" celled striped>
    <Table.Body>
      <Table.Row className={e.establishmentStatus === "Open" ? "positive" : ""}>
        <Table.Cell>
          <strong>Status</strong>
        </Table.Cell>
        <Table.Cell>
          {!e.establishmentStatus ? "Unknown" : e.establishmentStatus}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <strong>License type</strong>
        </Table.Cell>
        <Table.Cell>{e.licenseType}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <strong>State license number</strong>
        </Table.Cell>
        <Table.Cell>{e.licenseNumber}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <strong>Owner</strong>
        </Table.Cell>
        <Table.Cell>{e.owner}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <strong>Complexity level</strong>
        </Table.Cell>
        <Table.Cell>
          {!e.riskCategory ? "Unknown" : e.riskCategory}
          <span style={{ marginLeft: ".5em" }}>
            <Popup wide size="tiny" trigger={<Icon circular name="question" size="small" color="grey" />}>
              {metadata.risks[`${e.riskCategory}`]}
            </Popup>
          </span>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <strong>Review frequency</strong>
        </Table.Cell>
        <Table.Cell>
          {Math.round(e.reviewFrequencyDays) === 0 ? `Unknown`
            : `Every ${Math.round(e.reviewFrequencyDays)} days`}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default Establishment
