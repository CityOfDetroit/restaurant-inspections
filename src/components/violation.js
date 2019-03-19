import React from 'react'
import _ from 'lodash'
import { format } from 'date-fns'
import { Item, Label, Icon, Header } from 'semantic-ui-react'

import ViolationExpanded from './violation_expanded'

const Violation = ({ data }) => {
  let summary = `${data.itemDescription} ${_.lowerCase(data.subItem)} ${_.lowerCase(data.problemDescription)} ${_.lowerCase(data.subProblem)}`
  let fallback = `Expand for full food code definition`

  return (
    <Item>
      <Item.Content>
        <Header as='h5'>Code {data.violationCode}</Header>
        <ViolationExpanded summary={summary.trim()} fallback={fallback} vioDesc={data.violationDescription} />
        <Item.Extra>
          <Label color={data.violationType === "Priority" ? 'red' : data.violationType === "Foundation" ? 'orange' : 'yellow'}>
            {data.violationType === "Foundation" ? "Priority Foundation" : data.violationType}
          </Label>
          <Label>
            <Icon name={data.corrected === "Yes" ? 'check' : data.corrected === "No" ? 'times' : 'ban'} color={data.corrected === "Yes" ? 'green' : data.corrected === "No" ? 'red' : 'grey'} />
            {data.corrected === "Yes" ? `Corrected on ${format(data.correctedDate, 'M-D-YY')}` : data.corrected === "No" ? "Not corrected" : data.corrected}
          </Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default Violation
