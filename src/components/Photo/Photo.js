import { useState } from 'react'
import './Photo.css'

export const Photo = ({photo, setPhoto, options}) => {
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
        const filters = options.map(option => {
            return `${option.prop}(${option.value}${option.unit})`
        })
        return filters.join(' ')
    }
    function createFilteredCanvas(imageUrl, filters) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        
        var img = new Image();
        img.src = imageUrl;
        
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;

          ctx.filter = filters;

          ctx.drawImage(img, 0, 0);
          
          
          canvas.toBlob(function(blob) {
            var url = URL.createObjectURL(blob);
      
            var link = document.createElement('a');
            link.href = url;
            link.download = 'react-photo-editor.png';
      
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
                        alt="your photo"
                        style={{transform: `scale(${scale})`, filter: getStyles()}}
                    />
                    <span className='size-buttons'>
                        <button type='button' onClick={()=>{Resize('up')}}>+</button>
                        <button type='button' onClick={()=>{Resize('down')}}>-</button>
                    </span>
                    <span className='save-button'>
                        <button type='button' onClick={()=>{createFilteredCanvas(photo, getStyles())}}>Zapisz</button>
                    </span>
                </div>
            :
                <input
                    type="file"
                    accept="image/*"
                    name="newImage"
                    onChange={(event) => {
                        console.log(typeof event.target.files[0]);
                        setPhoto(URL.createObjectURL(event.target.files[0]));
                }}
            />
            }
        </div>
    )
}