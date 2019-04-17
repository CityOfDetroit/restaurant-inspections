import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Search, List } from 'semantic-ui-react'

class SearchEstablishments extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      if(this.state.value.length > 0 && this.state.value.length < 3) { return; }

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    
    const resRender = ({ name, address, establishmentid }) => (
      <List.Item key={establishmentid}>
        <List.Content>
          <Link to={`/establishment/${establishmentid}`}>
            <List.Header as='a' style={{ fontWeight: 700 }}>{name}</List.Header>
            <List.Description>{address}</List.Description>
          </Link>
        </List.Content>
      </List.Item>
    )

    return (
      <Search
        input={{ fluid: true }}
        fluid
        size='big'
        placeholder="Search by name..."
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
        results={results}
        resultRenderer={resRender}
        value={value}
        {...this.props}
      />
    )
  }
}

export default SearchEstablishments
