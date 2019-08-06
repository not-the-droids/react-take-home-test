import React, { Component } from 'react'

export class Center extends Component {
  render() {
    return (
      <div style={centeredStyle}>
        {this.props.children}
      </div>
    )
  }
}

const centeredStyle = {
  display: 'flex',
  minHeight: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

export default Center
