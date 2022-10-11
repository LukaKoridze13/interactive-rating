import React from 'react'
import Mobile from '../Images/illustration-thank-you.svg'
import BigText from './BigText'
import Text from './Text'
import './Result.css'
export default function Result(props) {
  return (
    <div className="card" style={{alignItems:'center', padding:'45px 0px'}}>
      <img src={Mobile} alt="Mobile" />
      <p className='selected'>You selected {props.rate} out of 5</p>
      <BigText text='Thank you!'/>
      <Text text='We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!' textAlign='center'/>
    </div>
  )
}
