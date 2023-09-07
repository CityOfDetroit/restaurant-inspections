import React from 'react'
import _ from 'lodash'
import { Segment, Item, Label, Icon, Header, Popup } from 'semantic-ui-react'
import * as dayjs from 'dayjs'
import metadata from '../data/metadata'
import ViolationExpanded from './violation_expanded'

const Violation = ({ data }) => {
  let summary = `${data.itemDescription} ${_.lowerCase(data.subItem)} ${_.lowerCase(data.problemDescription)} ${_.lowerCase(data.subProblem)}`
  let fallback = `Expand for full food code definition`

  return (
    <Segment>
      <Header as='h5'>Code {data.violationCode}</Header>
      <ViolationExpanded summary={summary.trim()} fallback={fallback} vioDesc={data.violationDescription} />
      <Item.Extra style={{ paddingTop: 10 }}>
        <Popup trigger={(<Label color={data.violationType === "Priority" ? 'red' : data.violationType === "Foundation" ? 'orange' : 'yellow'}>
          {data.violationType === "Foundation" ? "Priority Foundation" : data.violationType}
        </Label>)}
          content={metadata.violations[data.violationType]}
          basic />
        <Label>
          <Icon name={data.corrected === "true" ? 'check' : data.corrected === "false" ? 'times' : 'ban'} color={data.corrected === "true" ? 'green' : data.corrected === "false" ? 'red' : 'grey'} />
          {data.corrected === "true" ? `Corrected on ${dayjs(data.correctedDate).format('M-DD-YYYY')}` : data.corrected === "false" ? "Not corrected" : data.corrected === "Not required" ? "Reviewed at next routine inspection" : data.corrected}
        </Label>
      </Item.Extra>
    </Segment>
  )
}

export default Violation
