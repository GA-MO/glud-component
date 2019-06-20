import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import MobileModalFullscreen from '../MobileModalFullscreen'

const iOSWebView = () => {
  return navigator.userAgent.match(/SpaceX_iOS/i)
}

const Iframe = ({ title, show, src, onClose }) => {
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
      show={isShow}
      title={title}
      onClose={handleClickClose}
      overflowHidden={!iOSWebView()}
    >
      {showIframe && (
        <iframe
          id='appIframe'
          style={{
            width: 0,
            height: 0,
            minWidth: '100%',
            minHeight: '100%'
          }}
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
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

Iframe.defaultProps = {
  title: 'Iframe Title',
  src: 'https://en.wikipedia.org',
  show: false,
  onClose: () => null
}

export default Iframe
