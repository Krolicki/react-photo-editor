import { useState } from 'react'
import './App.css'
import {EditorBar, Photo} from './components'

function App() {
  const [photo, setPhoto] = useState(null)
  const [values, setValues] = useState({
    'brightness': 100,
    'contrast': 100    
  })

  return (
    <div className="App">
        <div className='editor'>
          <EditorBar 
            values = {values} 
            setValues = {setValues}
          />
          <Photo 
            photo = {photo}
            setPhoto = {setPhoto}
            values = {values}
          />
      </div>
    </div>
  )
}

export default App