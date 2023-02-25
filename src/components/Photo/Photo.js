import { useState } from 'react'
import './Photo.css'

export const Photo = ({photo, setPhoto, values}) => {
    const [scale, setScale] = useState(1)

    const Resize = (type) => {
        if(type === 'up'){
            if(scale < 1.5)
                setScale(scale + 0.1)
        }
        if(type === 'down'){
            if(scale > 0.5)
                setScale(scale - 0.1)
        }
    }

    const getStyles = () => {
        const filters = Object.entries(values).forEach(entry =>{
            const [key, value] = entry
        })
    }

    return(
        <div className='photo-container'>
            {photo ?
                <div className='photo-wraper'>
                    <img 
                        src={photo} 
                        alt="your photo"
                        style={{transform: `scale(${scale})`, filter: getStyles()}}
                    />
                    <span className='size-buttons'>
                        <button type='button' onClick={()=>{Resize('up')}}>+</button>
                        <button type='button' onClick={()=>{Resize('down')}}>-</button>
                    </span>
                </div>
            :
                <input
                    type="file"
                    accept="image/*"
                    name="newImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setPhoto(URL.createObjectURL(event.target.files[0]));
                }}
            />
            }
        </div>
    )
}