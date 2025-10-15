import React, { Component } from 'react';
import { Accordion, Icon, Header, Popup, Table, Segment } from 'semantic-ui-react';
import * as dayjs from 'dayjs'
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
                {dayjs(e.inspectionDate).format('MM-DD-YYYY')}
                <Header.Subheader>
                  {e.inspectionType + ' '}
                  <Icon name={e.isInCompliance === true ? 'check' : e.isInCompliance === false ? 'times' : null} color={e.isInCompliance === true ? 'green' : 'red'} />
                </Header.Subheader>
              </Header>
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === i}>
              <Table basic='very' celled compact>
                <Table.Body>
                  <Table.Row className={e.isInCompliance === true ? 'positive' : e.isInCompliance === false ? 'negative' : ''}>
                    <Table.Cell>
                      <strong>Outcome</strong>
                    </Table.Cell>
                    <Table.Cell>
                      {e.isInCompliance === true ? "Compliant" : e.isInCompliance === false ? "Not compliant" : e.isInCompliance}
                      <span style={{ marginLeft: '.5em' }}>
                        <Popup wide size='tiny' trigger={<Icon circular name='question' size='small' color='grey' />}>
                          {metadata.outcomes[`${e.isInCompliance}`]}
                        </Popup>
                      </span>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Header as='h5'>
                {e.violationsByInspectionIdList.length} {e.violationsByInspectionIdList.length === 1 ? 'violation' : 'violations'} cited {e.violationsByInspectionIdList.length > 0 ? ':' : null}
              </Header>
              {e.violationsByInspectionIdList.length > 0 ? 
                <Segment.Group divided='true' vertical='middle'>
                  {e.violationsByInspectionIdList.map((e, i) => (
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
