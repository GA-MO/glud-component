import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class TagGroup extends Component {
  static propTypes = {
    withAddon: PropTypes.bool,
    className: PropTypes.string
  }

  render() {
    const { className, withAddon, children } = this.props
    const classes = classNames(
      '',
      {
        tags: !withAddon,
        'field is-grouped is-grouped-multiline': withAddon
      },
      className
    )

    return (
      <div className={classes}>
        {withAddon ? (
          React.Children.map(children, (child, index) => (
            <div className='control'>{child}</div>
          ))
        ) : (
          this.props.children
        )}
      </div>
    )
  }
}
