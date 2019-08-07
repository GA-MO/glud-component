import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../AppHeader'
import { useTransition, animated } from 'react-spring'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const MobileModalFullscreen = ({
  title,
  show,
  leftIcon,
  onClickLeft,
  onClose,
  wrap,
  headerDisabled,
  overflowHidden,
  children
}) => {
  const transitions = useTransition(show, null, {
    from: {
      willChange: 'all',
      position: 'fixed',
      zIndex: 10,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transform: 'scale(1.03) translateZ(0)',
      backgroundColor: 'hsla(0,0%,4%,.3)',
      opacity: 0
    },
    enter: {
      transform: 'scale(1) translateZ(0)',
      opacity: 1
    },
    leave: {
      transform: 'scale(1.03) translateZ(0)',
      opacity: 0
    },
    config: { mass: 1, tension: 2000, friction: 70 }
  })

  return (
    <Fragment>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Style wrap={wrap ? 1 : 0} overflowHidden={overflowHidden}>
                <div className='modal-wrapper'>
                  {!headerDisabled && (
                    <AppHeader
                      title={title}
                      leftIcon={leftIcon}
                      onClickLeft={onClickLeft}
                      rightIcon='fas fa-times'
                      onClickRight={onClose}
                    />
                  )}
                  <div className='wrap-content'>{children}</div>
                </div>
              </Style>
            </animated.div>
          )
      )}
    </Fragment>
  )
}

MobileModalFullscreen.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  wrap: PropTypes.bool.isRequired,
  leftIcon: PropTypes.string,
  onClickLeft: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  headerDisabled: PropTypes.bool,
  overflowHidden: PropTypes.bool
}

MobileModalFullscreen.defaultProps = {
  title: 'Modal Title',
  show: false,
  wrap: false,
  onClickLeft: () => null,
  onClose: () => null,
  headerDisabled: false,
  overflowHidden: false
}

export default MobileModalFullscreen

const btnCloseWithLabel = css`
  .nav-right {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px 0;

    i {
      padding: 0px;
      padding-left: 5px;
    }

    &:before {
      content: 'Close';
      font-size: 11px;
      font-weight: bold;
    }
  }
`

const Style = styled.div`
  label: MobileModalFullscreen;

  .modal-wrapper {
    width: ${props => (props.wrap ? '400px' : '100%')};
    border-radius: ${props => (props.wrap ? '5px' : '0px')};
    overflow: hidden;
    position: fixed;
    z-index: 10;
    top: ${props => (props.wrap ? '60px' : '0')};
    bottom: ${props => (props.wrap ? '60px' : '0')};
    left: 50%;
    background: #fff;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);

    @media screen and (max-width: 700px) {
      width: 100%;
      top: 0;
      bottom: 0;
      border-radius: 0;
    }
  }

  .app-header {
    flex-shrink: 0;

    @media screen and (min-width: 700px) {
      ${props => !props.wrap && btnCloseWithLabel}
    }
  }

  .wrap-content {
    flex-grow: 1;
    height: 100%;
    word-break: break-word;
    -webkit-overflow-scrolling: touch;
    overflow-y: ${p => (p.overflowHidden ? 'hidden' : 'auto')};
  }
`
