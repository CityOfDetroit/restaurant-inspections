import React from "react";
import { Segment } from "semantic-ui-react";
import { format } from "date-fns";

import metadata from "../data/metadata";

const Citation = ({ date }) => (
  <Segment basic size='small' textAlign='right'>
    Built using <a href={metadata.links.openData.url} target='_blank' rel='noopener noreferrer'>{metadata.links.openData.display}</a> | Last updated {format(date, 'M-D-YYYY')}
  </Segment>
);

export default Citation;
