import React, { Component } from 'react'
import spinning from './spinning.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={spinning} alt="" />
      </div>
    )
  }
}

export default Spinner
