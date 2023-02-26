import './EditorBar.css'

export const EditorBar = ({options, setOptions}) => {

    

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
        <div className='editor-bar'>
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

        </div>
    )
}