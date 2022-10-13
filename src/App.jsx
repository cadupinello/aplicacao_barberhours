import { useState } from 'react'
import './App.css'
import Box from './components/Box/Box'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
          <Box/>
          <Footer/>
      </div>
    </>
  )
}

export default App
