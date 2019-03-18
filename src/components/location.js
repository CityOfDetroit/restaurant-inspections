import React from "react"
import { Link } from "gatsby"
import { Grid, Header, Image, List } from "semantic-ui-react"

const Location = ({ e, encoded }) => (
  <Grid columns={2} stackable>
    <Grid.Row>
      <Grid.Column>
        <Header as="h3">
          {e.name}
          <Header.Subheader>{e.address}, Detroit, MI, {e.zipcode}</Header.Subheader>
        </Header> 
        <Image
          rounded
          bordered
          floated="right"
          src={`https://api.mapbox.com/styles/v1/jmcbroom/cjsunv74q0t5a1fmo902wmiq0/static/geojson(${encoded})/${e.coords},16,0,0/400x250@2x?access_token=pk.eyJ1Ijoiam1jYnJvb20iLCJhIjoianRuR3B1NCJ9.cePohSx5Od4SJhMVjFuCQA`}
        />
      </Grid.Column>
      <Grid.Column textAlign="left">
        <Header as="h3">Establishments nearby</Header>
        <List
          link
          divided
          relaxed
          bordered="true"
          size="large"
          style={{ height: 275, overflowY: "scroll" }}
        >
          {e.nearbyList.map(i => (
            <List.Item key={i.establishmentid}>
              <List.Content>
                <Link to={`/establishment/${i.establishmentid}`}>
                  <List.Header as='a'>{i.name}</List.Header>
                  <List.Description style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{i.address}</List.Description>
                </Link>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Location
