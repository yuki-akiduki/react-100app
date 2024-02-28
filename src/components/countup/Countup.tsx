import { useState } from 'react'

export default function Countup() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(prev => prev + 1);
  }

  const countReset = () => {
    setCount(0);
  }

  const countDown = () => {
    setCount(prev => prev - 1);
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div>
        <p className='text-center'>{count}</p>
        <div className="flex justify-center items-center gap-2">
          <button onClick={() => countUp()}>Up</button>
          <button onClick={() => countReset()}>Reset</button>
          <button onClick={() => countDown()}>Down</button>
        </div>
      </div>
    </div>
  )
}
