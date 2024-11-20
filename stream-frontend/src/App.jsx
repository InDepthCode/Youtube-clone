import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoUpload from './components/videoUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col space-y-5 justify-center ">
        <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-100">
          Hello world
        </h1>

        <VideoUpload />

      <h1> I have commited this change</h1>
      </div>
      
    </>
  )
}

export default App
