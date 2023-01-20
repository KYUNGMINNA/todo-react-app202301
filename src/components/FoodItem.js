import React from 'react'

//props: 부모 컴포넌트가 보내준 데이터가 담긴 객체
const FoodItem = ({foodName, price})=> {
    //console.log(props);
  return (
    //<a href='#'>{props.foodName} ({props.price})원</a
    <li>
    <a href="#">{foodName} ({price}원)</a>
</li>

    )
}

export default FoodItem