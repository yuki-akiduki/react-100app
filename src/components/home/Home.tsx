import React from 'react'
import Card from '../common/Card'
import HelloWorld from '../HelloWorld/HelloWorld';
import { Routes, Route, Link } from 'react-router-dom';


const linkList = [
  {
    link: '/helloworld',
    name: 'Hello World',
    text: 'Reactを使用して、画面中央に"Hello World"というメッセージを表示するコンポーネントを作成します。'
  },

  {
    link: '/countup',
    name: 'Count UP',
    text: 'Reactを使用して、カウントアップするコンポーネントを作成します。'
  }
]
export default function Home() {
  return (
    <>
      <main className='container mx-auto px-6'>
        <h1 className='text-center text-4xl mt-10 leading-normal font-bold'>Create to React 100 app</h1>
        <ul className='mt-10 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6'>
          {linkList.map((item,i)=> {
            return (
            <>
              <li key={item.name} className='grid'>
                <Link to={item.link} className='contents'>
                  <Card name={item.name} index={i + 1} text={item.text}/>
                </Link>
              </li>
            </>
            )
          })}
        </ul>
      </main>

      <Routes>
        <Route path='/helloworld' element = {<HelloWorld/>} />
      </Routes>
    </>
  );
}
