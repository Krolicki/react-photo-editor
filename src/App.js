import { useState } from 'react'
import './App.css'
import {Photo} from './components'

function App() {
  const [photo, setPhoto] = useState(null)

  return (
    <div className="App">
      <Photo 
        photo = {photo}
        setPhoto = {setPhoto}
      />
    </div>
  )
}

export default App