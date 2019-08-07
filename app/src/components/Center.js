import React from 'react'

export default ({ children }) => (
  <div style={centeredStyle}>
    {children}
  </div>
)

const centeredStyle = {
  display: 'flex',
  minHeight: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}
