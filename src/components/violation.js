import React from 'react'
import _ from 'lodash'
import { format } from 'date-fns'
import metadata from '../data/metadata';
import { Segment, Item, Label, Icon, Header, Popup} from 'semantic-ui-react'

import ViolationExpanded from './violation_expanded'

const Violation = ({ data }) => {
  let summary = `${data.itemDescription} ${_.lowerCase(data.subItem)} ${_.lowerCase(data.problemDescription)} ${_.lowerCase(data.subProblem)}`
  let fallback = `Expand for full food code definition`

  return (
    <Segment>
        <Header as='h5'>Code {data.violationCode}</Header>
        <ViolationExpanded summary={summary.trim()} fallback={fallback} vioDesc={data.violationDescription} />
        <Item.Extra style={{paddingTop: 10}}>
          <Popup trigger={(<Label color={data.violationType === "Priority" ? 'red' : data.violationType === "Foundation" ? 'orange' : 'yellow'}>
            {data.violationType === "Foundation" ? "Priority Foundation" : data.violationType}
          </Label>)}
            content={metadata.violations[data.violationType]}
            basic />
          <Label>
            <Icon name={data.corrected === "Yes" ? 'check' : data.corrected === "No" ? 'times' : 'ban'} color={data.corrected === "Yes" ? 'green' : data.corrected === "No" ? 'red' : 'grey'} />
            {data.corrected === "Yes" ? `Corrected on ${format(data.correctedDate, 'M-D-YY')}` : data.corrected === "No" ? "Not corrected" : data.corrected}
          </Label>
        </Item.Extra>
    </Segment>
  )
}

export default Violation
