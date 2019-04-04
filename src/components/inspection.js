import React, { Component } from 'react';
import { format } from 'date-fns';
import { Accordion, Icon, Header, Popup, Item, Table, Message } from 'semantic-ui-react';

import Violation from './violation';
import metadata from '../data/metadata';

class Inspection extends Component {
  state = { 
    activeIndex: null 
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ 
      activeIndex: newIndex 
    });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion fluid styled>
        {this.props.data.map((e, i) => (
          <div key={i}>
            <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick} style={{ display: 'flex', flexDirection: 'vertical', justifyContent: 'space-between', alignItems: 'center' }}>
              <Header as='h3'>
                {format(e.inspectionDate, 'M-D-YYYY')}
                <Header.Subheader>
                  {e.inspectionType + ' '}
                  <Icon name={e.inCompliance === "Yes" ? 'check' : e.inCompliance === "No" ? 'times' : null} color={e.inCompliance === "Yes" ? 'green' : 'red'} />
                </Header.Subheader>
              </Header>
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === i}>
              <Table basic='very' celled compact>
                <Table.Body>
                  <Table.Row className={e.inCompliance === "Yes" ? 'positive' : e.inCompliance === "No" ? 'negative' : ''}>
                    <Table.Cell>
                      <strong>Outcome</strong>
                    </Table.Cell>
                    <Table.Cell>
                      {e.inCompliance === "Yes" ? "Compliant" : e.inCompliance === "No" ? "Not compliant" : e.inCompliance}
                      <span style={{ marginLeft: '.5em' }}>
                        <Popup wide size='tiny' trigger={<Icon circular name='question' size='small' color='grey' />}>
                          {metadata.outcomes[`${e.inCompliance}`]}
                        </Popup>
                      </span>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              {format(e.inspectionDate, 'YY') === '16' || format(e.inspectionDate, 'YY') === '17' ?
                <Message visible size="small">
                  ***Please note that inspections pre-2018 were still occasionally completed on paper and follow-up visits to document corrections were not always digitized. This means that inspections in this time period are slightly more likely to show a not compliant outcome.
                </Message> : ''}

              <Header as='h5'>
                {e.violationsByInspectionidList.length} {e.violationsByInspectionidList.length === 1 ? 'violation' : 'violations'} cited {e.violationsByInspectionidList.length > 0 ? ':' : null}
              </Header>
              {e.violationsByInspectionidList.length > 0 ? 
                <Segment.Group divided='true' verticalAlign='middle'>
                  {e.violationsByInspectionidList.map((e, i) => (
                    <Violation data={e} key={i} />
                  ))}
                </Segment.Group>
              : `` }
            </Accordion.Content>
          </div>
        ))}
      </Accordion>
    );
  }
}

export default Inspection;
