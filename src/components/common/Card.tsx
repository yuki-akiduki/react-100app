import React from 'react'

type propsType = {
  name: string;
  index: number;
  text: string;
}

const Card:React.FC<propsType> = ({name,index,text}) => {
  return (
    <div className='p-2.5 border-black border-2 border-solid'>
      <img src="https://placehold.jp/260x160.png" alt="" className='w-full'/>
      <p className='text-xs leading-normal mt-2'>App {index.toString().padStart(3,'0')}</p>
      <p className='text-xl leading-normal'>{name}</p>
      <p className='text-xs leading-normal'>{text}</p>
    </div>
  )
}

export default Card;