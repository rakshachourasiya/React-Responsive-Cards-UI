import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users);
  return (
    <div id='right' className='h-full rounded-4xl overflow-auto flex flex-nowrap gap-10 p-6 w-2/3'>
        
        {props.users.map(function(ele,idx){

            return <RightCard key= {idx} id={idx+1}img={ele.img} color={ele.color} tag={ele.tag}/>
        })}
    </div>
  )
}

export default RightContent