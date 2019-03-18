import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

import metadata from '../data/metadata';

class FAQ extends Component {
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
      <Accordion fluid>
        {metadata.faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(34, 36, 38, 0.15)', padding: '.5em 0' }}>
            <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick} style={{ display: 'flex', flexDirection: 'vertical', justifyContent: 'space-between', alignItems: 'center' }}>
              {f.question}
              <Icon name='dropdown' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === i}>
              {f.answer}
            </Accordion.Content>
          </div>
        ))}
      </Accordion>
    );
  }
}

export default FAQ
