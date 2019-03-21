import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

class ViolationExpanded extends Component {
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
        <Accordion>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} style={{ display: 'flex', flexDirection: 'vertical', justifyContent: 'space-between', alignItems: 'center', fontWeight: 500, color: '#000' }}>
            {this.props.summary === "null" ? this.props.fallback : this.props.summary}
            <Icon name='dropdown' size='small' />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0} style={{ padding: '0 1em 1em 1em', color: 'rgba(0, 0, 0, 0.6)' }}>
            <span style={{ color: '#000' }}>FULL FOOD CODE:</span>
            <br />
            {this.props.vioDesc}
          </Accordion.Content>
        </Accordion>
      )
    }
}

export default ViolationExpanded
