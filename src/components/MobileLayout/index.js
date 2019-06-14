import PropTypes from 'prop-types'
import React from 'react'
import Styled from '@emotion/styled'

const MobileLayout = ({ header, content, footer }) => (
  <Style>
    {header && <div className='ui-header'>{header}</div>}
    <div className='ui-content' id='ui-container'>
      {content}
    </div>
    {footer && <div className='ui-footer'>{footer}</div>}
  </Style>
)

MobileLayout.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.node
}

const Style = Styled('div')`
  label: MobileLayout;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .ui-header, .ui-footer {
    flex-shrink: 0;
  }

  .ui-content {
    flex-grow: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`

export default MobileLayout
