import React from "react";
import { Segment } from "semantic-ui-react";
import * as dayjs from 'dayjs'
import metadata from "../data/metadata";

const Citation = ({ date }) => (
  <Segment basic size='small' textAlign='right'>
    Built using <a href={metadata.links.openData.url} target='_blank' rel='noopener noreferrer'>{metadata.links.openData.display}</a> | Site last updated {dayjs().format('MM-DD-YYYY')} with inspection data thru {dayjs(date).format('MM-DD-YYYY')}.
  </Segment>
);

export default Citation;
