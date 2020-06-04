import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import MobileModalFullscreen from '../MobileModalFullscreen'

const iOSWebView = () => {
  return navigator.userAgent.match(/SpaceX_iOS/i)
}

const Iframe = ({ testID, title, show, src, onClose }) => {
  const [isShow, setIsShow] = useState(show)
  const [showIframe, setShowIframe] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowIframe(show), 500)
  }, [show])

  const handleClickClose = () => {
    setIsShow(false)
    setTimeout(() => {
      onClose()
      setShowIframe(false)
    }, 1000)
  }

  return (
    <MobileModalFullscreen
      testID={testID}
      show={isShow}
      title={title}
      onClose={handleClickClose}
      overflowHidden={!iOSWebView()}
    >
      {showIframe && (
        <iframe
          id='appIframe'
          width='100%'
          height='100%'
          name='appIframe'
          title='App iframe'
          src={src}
          frameBorder='0'
        />
      )}
    </MobileModalFullscreen>
  )
}

Iframe.propTypes = {
  testID: PropTypes.string,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

Iframe.defaultProps = {
  testID: 'modal-iframe',
  title: 'Iframe Title',
  src: 'https://en.wikipedia.org',
  show: false,
  onClose: () => null
}

export default Iframe
