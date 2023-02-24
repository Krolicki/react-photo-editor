import { useState } from 'react'
import './App.css'
import {EditorBar, Photo} from './components'

function App() {
  const [photo, setPhoto] = useState(null)

  return (
    <div className="App">
        <div className='editor'>
          <EditorBar />
          <Photo 
            photo = {photo}
            setPhoto = {setPhoto}
          />
      </div>
    </div>
  )
}

export default App