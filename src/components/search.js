import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Search, List } from 'semantic-ui-react'

class SearchEstablishments extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.establishmentName })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      if(this.state.value.length > 0 && this.state.value.length < 3) { return; }

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.establishmentName)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    
    console.log(results)

    const resRender = ({ establishmentName, address, establishmentId }) => (
      <List.Item key={establishmentId}>
        <List.Content>
          <Link to={`/establishment/${establishmentId}`}>
            <List.Header as='a' style={{ fontWeight: 700 }}>{establishmentName}</List.Header>
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
