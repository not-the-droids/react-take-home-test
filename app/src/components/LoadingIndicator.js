import React, { Component } from 'react'
import { ImpulseSpinner } from 'react-spinners-kit'

export class LoadingIndicator extends Component {
  render() {
    return (
      <ImpulseSpinner
        frontColor='#aaa'
        backColor='rgba(0,0,0,0)'
        loading={true}
      />
    )
  }
}

export default LoadingIndicator
