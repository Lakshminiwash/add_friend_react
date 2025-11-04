import React from 'react'

const Card = ({img,name,singer,btn,friend,index}) => {
  return (
      <div className='w-78 mb-15 relative bg-blue-300 rounded-md px-5 py-5 flex items-start justify-between'>
         <div className='w-18 h-16 overflow-hidden rounded-2xl bg-red-400'>
            <img className='w-full h-full object-cover' src={img} alt="" />
         </div>
         <div>
            <h1 className='font-bold'>Name : {name}</h1>
            <h2 className='font-semibold'>Singer : {singer}</h2>
         </div>
         <button onClick={()=>btn(index)} className={`${friend===true ?"bg-amber-500": "bg-teal-500"} whitespace-nowrap px-5 font-bold cursor-pointer py-1 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2`}>{friend===true? "Friends" : "Add friend"}</button>
      </div>
  )
}

export default Card
