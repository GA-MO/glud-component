import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default class Column extends Component {
  static propTypes = {
    /**
     * Desktop
     */
    D: PropTypes.number,
    /**
     * Laptop
     */
    L: PropTypes.number,
    /**
     * Tablet
     */
    T: PropTypes.number,
    /**
     * Mobile
     */
    M: PropTypes.number,
    /**
     * Small Mobile
     */
    SM: PropTypes.number,
    /**
     * Extra Small Mobile
     */
    XSM: PropTypes.number,
    orderD: PropTypes.number,
    orderL: PropTypes.number,
    orderT: PropTypes.number,
    orderM: PropTypes.number,
    orderSM: PropTypes.number,
    orderXSM: PropTypes.number,
    top: PropTypes.bool,
    middle: PropTypes.bool,
    bottom: PropTypes.bool,
    className: PropTypes.string
  }

  render () {
    const {
      D,
      L,
      T,
      M,
      SM,
      XSM,
      orderD,
      orderL,
      orderT,
      orderM,
      orderSM,
      orderXSM,
      top,
      middle,
      bottom,
      className,
      children
    } = this.props

    const classes = classNames('', {
      [className]: className,
      [`D-${D}`]: D,
      [`L-${L}`]: L,
      [`T-${T}`]: T,
      [`M-${M}`]: M,
      [`SM-${SM}`]: SM,
      [`XSM-${XSM}`]: XSM,
      [`D-order-${orderD}`]: orderD,
      [`L-order-${orderL}`]: orderL,
      [`T-order-${orderT}`]: orderT,
      [`M-order-${orderM}`]: orderM,
      [`SM-order-${orderSM}`]: orderSM,
      [`XSM-order-${orderXSM}`]: orderXSM,
      'vertical-top': top,
      'vertical-middle': middle,
      'vertical-bottom': bottom
    })
    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}
