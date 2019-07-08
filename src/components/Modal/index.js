import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'

class Modal extends Component {
  static propTypes = {
    testID: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    centered: PropTypes.bool,
    open: PropTypes.bool,
    fullscreen: PropTypes.bool,
    inline: PropTypes.bool,
    closeOnClickOutside: PropTypes.bool,
    onClose: PropTypes.func
  }

  static defaultProps = {
    testID: 'modal',
    closeOnClickOutside: true
  }

  render () {
    const {
      testID,
      className,
      title,
      centered,
      open,
      fullscreen,
      inline,
      closeOnClickOutside,
      onClose,
      children
    } = this.props
    const modalClass = classNames(
      '',
      {
        modal: !inline,
        'is-active': open,
        'is-centered': centered,
        fullscreen: fullscreen
      },
      className
    )

    return (
      <div className={modalClass}>
        {!inline && (
          <div
            data-test-id={`${testID}-overlay`}
            className='modal-background'
            onClick={() => (closeOnClickOutside && onClose()) || null}
          />
        )}
        <div className='modal-card'>
          {title && (
            <header className='modal-card-head'>
              <p className='modal-card-title'>{title}</p>
              {onClose && (
                <button
                  data-test-id={`${testID}-close-button`}
                  className='delete'
                  onClick={onClose}
                />
              )}
            </header>
          )}
          {children}
        </div>
      </div>
    )
  }
}

Modal.Content = ModalContent
Modal.Footer = ModalFooter

export default Modal
