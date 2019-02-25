import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import Modal from '../Modal'
import Button from '../Button'

class Confirm extends Component {
  static propTypes = {
    testID: PropTypes.string,
    title: PropTypes.string,
    buttons: PropTypes.array.isRequired,
    content: PropTypes.node
  }

  static defaultProps = {
    testID: 'confirm',
    title: 'Title',
    buttons: [
      {
        label: 'Cancel',
        onClick: () => null
      },
      {
        primary: true,
        label: 'Confirm',
        onClick: () => null
      }
    ],
    content: <div>Content is here.</div>
  }

  componentDidMount = () => {
    const { closeTime } = this.props
    if (closeTime) {
      setTimeout(() => close(), 1000 * closeTime)
    }
  }

  handleClickButton = (button) => {
    if (button.onClick) button.onClick()
    close()
  }

  render () {
    const { testID, title, buttons, content } = this.props
    return (
      <div data-test-id={testID} className='box-confirm animated fadeInDown'>
        <Modal title={title} centered open onClose={close}>
          <Modal.Content>{content}</Modal.Content>
          <Modal.Footer>
            {buttons.map((button, i) => (
              <Button
                key={i}
                primary={button.primary}
                onClick={() => this.handleClickButton(button)}
              >
                {button.label}
              </Button>
            ))}
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function createElemet (properties) {
  const divTarget = document.createElement('div')
  divTarget.id = 'box-react-confirm'
  document.body.appendChild(divTarget)

  render(<Confirm {...properties} />, divTarget)
}

function open (properties) {
  close().then(() => {
    createElemet(properties)
  })
}

function close () {
  return new Promise((resolve) => {
    const target = document.getElementById('box-react-confirm')
    if (!target) resolve()

    target.classList.add('alert-fade-out')

    const remove = () => {
      target.removeEventListener('webkitAnimationEnd', remove, false)
      target.removeEventListener('animationend', remove, false)
      target.addEventListener('onclick', remove, false)
      target.parentNode.removeChild(target)
      resolve()
    }

    target.addEventListener('webkitAnimationEnd', remove, false)
    target.addEventListener('animationend', remove, false)
    target.addEventListener('onclick', remove, false)
  })
}

export default {
  open: open,
  close: close
}
