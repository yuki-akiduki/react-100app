import './App.css';
import Home from './components/home/Home';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/helloworld' element = {<HelloWorld/>} />
      </Routes>
    </>
  )
}

export default App
