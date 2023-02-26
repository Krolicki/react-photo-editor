import { useState } from 'react'
import './App.css'
import {EditorBar, Photo} from './components'

function App() {
  const [photo, setPhoto] = useState(null)

  const [options, setOptions] = useState([
    {
        name: 'Jasność',
        prop: 'brightness',
        min: 0,
        max: 200,
        value: 100,
        unit: '%'
    },
    {
        name: 'Kontrast',
        prop: 'contrast',
        min: 0,
        max: 200,
        value: 100,
        unit: '%'
    },
    {
        name: 'Skala szarości',
        prop: 'grayscale',
        min: 0,
        max: 100,
        value: 0,
        unit: '%'
    },
    {
        name: 'Odcień',
        prop: 'hue-rotate',
        min: 0,
        max: 360,
        value: 0,
        unit: 'deg'
    },
    {
        name: 'Negatyw',
        prop: 'invert',
        min: 0,
        max: 100,
        value: 0,
        unit: '%'
    },
    {
        name: 'Saturacja',
        prop: 'saturate',
        min: 0,
        max: 100,
        value: 100,
        unit: '%'
    },
    {
        name: 'Sepia',
        prop: 'sepia',
        min: 0,
        max: 100,
        value: 0,
        unit: '%'
    },
    {
        name: 'Rozmycie',
        prop: 'blur',
        min: 0,
        max: 20,
        value: 0,
        unit: 'px'
    }
  ])


  return (
    <div className="App">
        <div className='editor'>
          <EditorBar 
            options = {options} 
            setOptions = {setOptions}
          />
          <Photo 
            photo = {photo}
            setPhoto = {setPhoto}
            options = {options}
          />
      </div>
    </div>
  )
}

export default App