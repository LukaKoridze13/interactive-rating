import React from 'react'
import Card from './Card';
import Circle from './Circle';
import Star from '../Images/icon-star.svg'
import BigText from './BigText';
import Text from './Text';
import Box from './Box';
import Submit from './Submit';
export default function Rate(props) {
    return (
        <>
            <Card>
                <Circle events='none'>
                    <img src={Star} alt="Star" />
                </Circle>
                <BigText text='How did we do?' />
                <Text text='Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!' />
                <Box rate={props.rate}/>
                <Submit submit={props.submit}/>
            </Card>
        </>
    )
}
