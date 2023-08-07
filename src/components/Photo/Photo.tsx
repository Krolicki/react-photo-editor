import { useState } from 'react'
import './Photo.css'
import { Option } from '../../App'

type PhotoProps = {
    photo: string | null
    setPhoto: React.Dispatch<React.SetStateAction<string | null>>
    options: Option[]
    setGoToEditor: React.Dispatch<React.SetStateAction<boolean>>
    resetOptions: () => void
}

export const Photo = ({photo, setPhoto, options, setGoToEditor, resetOptions} : PhotoProps) => {
    const [scale, setScale] = useState(1)

    const Resize = (type : string) => {
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
        const filters = options.map(option => {
            return `${option.prop}(${option.value}${option.unit})`
        })
        return filters.join(' ')
    }

    function createFilteredCanvas(imageUrl : string, filters : string) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        
        const img = new Image();
        img.src = imageUrl;
        img.crossOrigin="anonymous"
        
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;

          ctx.filter = filters;

          ctx.drawImage(img, 0, 0);
          
          
          canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob as Blob);

            const date = new Date()
            const formattedDate = date.toISOString().replace(/[:.]/g, '-').replace(/[T]/g, '_').substring(0, 19)
      
            const link = document.createElement('a');
            link.href = url;
            link.download = `React-Photo-Editor-${formattedDate}.png`;
      
            link.click();
      
            URL.revokeObjectURL(url);
            link.remove();
          }, 'image/png');
        };
      }
    return(
        <div className='photo-container'>
            {photo ?
                <div className='photo-wraper'>
                    <img 
                        src={photo} 
                        alt=""
                        style={{transform: `scale(${scale})`, filter: getStyles()}}
                    />
                    <span className='size-buttons'>
                        <button type='button' onClick={()=>{Resize('up')}}>+</button>
                        <button type='button' onClick={()=>{Resize('down')}}>-</button>
                    </span>
                    <span className='option-buttons'>
                        <button type='button' onClick={()=>{createFilteredCanvas(photo, getStyles())}}>Zapisz</button>
                        <button type='button' onClick={()=>{setPhoto(null); resetOptions();}}>Usuń</button>
                        <button type='button' onClick={()=>setGoToEditor(false)}>Wróć</button>
                    </span>
                </div>
            :
                <div className='file-input'>
                    <label htmlFor="newImageInput" className='file-input-label'>
                        Prześlij plik
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        name="newImage"
                        id="newImageInput"
                        onChange={(event : React.ChangeEvent<HTMLInputElement>) => {
                            if (event.target.files && event.target.files.length > 0) {
                                setPhoto(URL.createObjectURL(event.target.files[0]));
                            }
                        }}
                    />
                    <button type='button' onClick={()=>setGoToEditor(false)}>Wróć do ekranu głównego</button>
                </div>
            }
        </div>
    )
}