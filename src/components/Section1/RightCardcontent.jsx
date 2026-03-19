import React from 'react'

const RightCardcontent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-8'>
        <h2 className='bg-white font-semibold text-2xl rounded-full h-12 w-12 flex  items-center justify-center'>{props.id}</h2>
        <div>
            <p className='text-xl mb-10 text-shadow-2xs text-white leading-relaxed '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quaerat dignissimos quo, earum recusandae deserunt.</p>
            <div className=' flex justify-between'>
            <button style={{backgroundColor: props.color}} className='text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button style={{backgroundColor: props.color}}  className=' text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
            
    </div>
  )
}

export default RightCardcontent