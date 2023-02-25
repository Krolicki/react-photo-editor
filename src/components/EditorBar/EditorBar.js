import './EditorBar.css'

export const EditorBar = ({values, setValues}) => {

    const options = [
        {
            name: 'Jasność',
            prop: 'brightness',
            min: 0,
            max: 200,
            unit: '%'
        },
        {
            name: 'Kontrast',
            prop: 'contrast',
            min: 0,
            max: 200,
            unit: '%'
        }
    ]

    const handleChange = ({target}) => {
        //const names = Object.keys(values)
        setValues(prevValue => {
            return({
                ...prevValue,
                [target.name] : target.value,
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
                            value={values[option.prop]} 
                            onChange={handleChange}
                        />
                    </span>
                )
            }) 

            }

        </div>
    )
}