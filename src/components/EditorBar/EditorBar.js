import { useState } from 'react'
import './EditorBar.css'

export const EditorBar = ({options, setOptions, photoSelected, resetOptions}) => {
    const [hideEditorBar, setHideEditorBar] = useState(false)

    const handleChange = ({target}) => {
        setOptions(prevValue => {
            return prevValue.map(option =>{
                if(option.prop !== target.name){
                    return option
                }
                return({
                    ...option,
                    value : target.value
                })
            })
            
        })
    }

    return(
        <div className={`editor-bar ${photoSelected && !hideEditorBar ? 'show-editor-bar' : ""}`}>
            {photoSelected && hideEditorBar ?
                <span className='show-arrow' title='Pokaż pasek' onClick={()=>setHideEditorBar(false)}></span>
            :
                <span className='hide-arrow' title='Schowaj pasek' onClick={()=>setHideEditorBar(true)}></span>
            }
            {options.map((option, index)=>{
                return(
                    <span className='editor-item' key={index}>
                        <p>{option.name}</p>
                        <input 
                            type='range'
                            name={option.prop} 
                            min={option.min}
                            max={option.max} 
                            value={option.value} 
                            onChange={handleChange}
                        />
                    </span>
                )
            }) 
            }
            <button type='button' className='editor-button' onClick={()=>resetOptions()}>Resetuj</button>

        </div>
    )
}