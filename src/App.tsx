import './App.css'
import Card from './components/common/Card'
function App() {

  return (
    <>
      <main className='container mx-auto px-6'>
        <h1 className='text-center text-4xl mt-10 leading-normal font-bold'>Create to React 100 app</h1>
        <div className='mt-10 grid grid-cols-5 gap-6'>
          <Card />
        </div>

      </main>
    </>
  )
}

export default App
