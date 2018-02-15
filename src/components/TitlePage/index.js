import React, { Component } from 'react'

export default class TitlePage extends Component {
  render () {
    return <h1 className='title is-primary'>{this.props.children}</h1>
  }
}
