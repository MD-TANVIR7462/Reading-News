

import './App.css'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Question from './components/Questions/Question'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className='w-4/5 m-auto mt-1 mb-4'>
      <Nav></Nav>
      <Main></Main>
      <Question></Question>



    </div>
  )
}

export default App
