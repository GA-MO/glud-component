import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Toggle } from 'react-powerplug'
import Content from '../Card/Content'
import FooterItem from '../Card/FooterItem'
import Footer from '../Card/Footer'

class Card extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    withToggle: PropTypes.bool,
    open: PropTypes.bool
  }

  static defaultProps = {
    title: 'Component'
  }

  renderIconClass = on =>
    classNames('fas', {
      'fa-minus': on,
      'fa-plus': !on
    })

  render () {
    const { className, title, withToggle, open, children } = this.props

    if (withToggle) {
      return (
        <Toggle initial={open}>
          {({ on, toggle }) => (
            <div className={`card ${className}`}>
              <header className='card-header'>
                <div className='card-header-title'>{title}</div>
                <a
                  href='javascript:;'
                  className='card-header-icon has-text-grey-dark'
                  aria-label='more options'
                  onClick={toggle}
                >
                  <span className='icon'>
                    <i className={this.renderIconClass(on)} aria-hidden='true' />
                  </span>
                </a>
              </header>
              {on && children}
            </div>
          )}
        </Toggle>
      )
    }

    return (
      <div className='card'>
        <header className='card-header'>
          <div className='card-header-title'>{title}</div>
        </header>
        {children}
      </div>
    )
  }
}

Card.Content = Content
Card.Footer = Footer
Card.FooterItem = FooterItem

export default Card
