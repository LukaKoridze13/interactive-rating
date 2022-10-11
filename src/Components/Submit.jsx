import React from 'react'
import './Submit.css'
export default function Submit(props) {
  return (
    <button className='submit' onClick={()=>{props.submit(true)}}>
        SUBMIT
    </button>
  )
}
