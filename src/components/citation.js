import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Segment } from "semantic-ui-react";
import * as dayjs from 'dayjs'
import metadata from "../data/metadata";

const Citation = () => {
  const citationQuery = useStaticQuery(graphql`
   query citationQuery {
    postgres {
      maxInspectionDate: allInspectionsList(orderBy: INSPECTION_DATE_DESC, first: 1) {
        inspectionDate
      }
    }
    currentBuildDate {
      currentDate
    }
  }
  `)
  const lastUpdated = citationQuery.postgres.maxInspectionDate[0].inspectionDate
  const lastBuilt = citationQuery.currentBuildDate.currentDate
  return (
  <Segment basic size='small' textAlign='right'>
    Built using <a href={metadata.links.openData.url} target='_blank' rel='noopener noreferrer'>{metadata.links.openData.display}</a> | Site last updated {dayjs(lastBuilt).format('MM-DD-YYYY')} with inspection data thru {dayjs(lastUpdated).format('MM-DD-YYYY')}.
  </Segment>
)};

export default Citation;
