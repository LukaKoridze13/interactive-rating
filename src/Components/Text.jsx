import './Text.css'
import React from 'react'

export default function Text(props) {
  return (
    <p className="text" style={{ textAlign:props.textAlign }}>{props.text}</p>
  )
}
