import React from 'react'

export default function Card() {
  return (
    <div className='p-2.5 border-black border-2 border-solid'>
      <img src="https://placehold.jp/260x160.png" alt="" className='w-full'/>
      <p className='text-xs leading-normal mt-2'>App 001</p>
      <p className='text-xl leading-normal'>Hello World!</p>
      <p className='text-xs leading-normal'>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
    </div>
  )
}
