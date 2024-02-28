import './App.css';
import Home from './components/home/Home';
import HelloWorld from './components/helloWorld/HelloWorld';
import Countup from './components/countup/Countup';
import { Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/helloworld' element = {<HelloWorld/>} />
        <Route path='/countup' element = {<Countup/>} />
      </Routes>
    </>
  )
}

export default App
