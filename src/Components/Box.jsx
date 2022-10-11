import React from 'react'
import Circle from './Circle'

export default function Box(props) {
    return (
        <div className='box' style={{ width: '87.2%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '24px' }}>
            <Circle onClick={()=>{props.rate(1)}}>1</Circle>
            <Circle onClick={() => { props.rate(2) }}>2</Circle>
            <Circle onClick={() => { props.rate(3) }}>3</Circle>
            <Circle onClick={() => { props.rate(4) }}>4</Circle>
            <Circle onClick={() => { props.rate(5) }}>5</Circle>
        </div>
    )
}
