import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import classNames from 'classnames'

class Toastify extends React.Component {
  render () {
    const { type, message, component } = this.props

    let UIComponent = null
    if (typeof component === 'function') {
      UIComponent = component()
    }

    const classes = classNames('toastify', {
      'is-success': type === 'SUCCESS',
      'is-danger': type === 'ERROR',
      'is-warning': type === 'WARNING',
      'is-info': type === 'INFO',
      'is-loading': type === 'LOADING',
      'hide-icon': UIComponent
    })

    return (
      <div className={classes}>
        {UIComponent}
        {message}
      </div>
    )
  }
}

function createToast ({
  type,
  position = 'center',
  message,
  closeTime,
  component,
  onClose
}) {
  const wrapperClassName = `react-toastify-wrapper ${position}`
  const wrapper = document.getElementsByClassName(wrapperClassName)
  const hasWrapper = wrapper.length === 1

  const divTarget = document.createElement('div')
  divTarget.className = 'move-up-enter'

  if (hasWrapper) {
    wrapper[0].appendChild(divTarget)
  }

  if (!hasWrapper) {
    const createWrapper = document.createElement('div')
    createWrapper.className = wrapperClassName
    createWrapper.appendChild(divTarget)
    document.body.appendChild(createWrapper)
  }

  render(
    <Toastify type={type} message={message} component={component} />,
    divTarget
  )

  if (closeTime) {
    setTimeout(() => {
      removeToast(divTarget, onClose)
    }, closeTime * 1000)
  }

  return {
    close: () => removeToast(divTarget, onClose)
  }
}

function removeToast (target, onClose) {
  target.classList.add('move-up-leave')

  const remove = () => {
    target.removeEventListener('webkitAnimationEnd', remove, false)
    target.removeEventListener('animationend', remove, false)
    unmountComponentAtNode(target)
    target.parentNode.removeChild(target)

    if (typeof onClose === 'function') onClose()
  }

  target.addEventListener('webkitAnimationEnd', remove, false)
  target.addEventListener('animationend', remove, false)
}

export default createToast
