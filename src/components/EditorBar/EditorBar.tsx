import { useState } from 'react'
import './EditorBar.css'
import { Option } from '../../App'

type EditorBarProps = {
    options: Option[]
    setOptions: React.Dispatch<React.SetStateAction<Option[]>>
    photoSelected: boolean
    resetOptions: () => void
}

export const EditorBar = ({options, setOptions, photoSelected, resetOptions} : EditorBarProps) => {
    const [hideEditorBar, setHideEditorBar] = useState(false)

    const handleChange = ({target} : React.ChangeEvent<HTMLInputElement>) => {
        setOptions(prevValue => {
            return prevValue.map(option =>{
                if(option.prop !== target.name){
                    return option
                }
                return{
                    ...option,
                    value : parseInt(target.value, 10)
                } as Option
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