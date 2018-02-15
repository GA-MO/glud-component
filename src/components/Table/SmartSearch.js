import React, { Component } from 'react'
import smartSearch from './script-search'
import Input from '../Input'

export default class SmartSearch extends Component {
  state = {
    searchValue: ''
  }

  onSearch = searchValue => {
    const { dataList, fieldsForSearch, onKeySearch } = this.props
    const patterns = searchValue.split(' ')
    const results = smartSearch(dataList, patterns, fieldsForSearch)
    const dataFromSearch = results
      ? results.map(result => result.entry)
      : undefined
    onKeySearch(dataFromSearch)
    this.setState({
      searchValue
    })
  }

  render () {
    const { searchValue } = this.state
    const { placeholder = 'Search to filter data' } = this.props
    return (
      <Input
        onlyContain
        placeholder={placeholder}
        onChange={e => this.onSearch(e.target.value)}
        value={searchValue}
      />
    )
  }
}
