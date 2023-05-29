import React from 'react'
import Loading from './Double Ring-1.1s-200px.gif'

const Spinner = () => {

  return (
    <div className='text-center'>
      <img src={Loading} alt="Loading" style={{ width: 60, height: 60 }} />
    </div>
  )
}


export default Spinner
