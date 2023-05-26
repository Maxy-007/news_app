import React, { Component } from 'react'
import Loading from './Double Ring-1.1s-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="Loading" style={{ width: 70, height: 70 }}/>
      </div>
    )
  }
}

export default Spinner
