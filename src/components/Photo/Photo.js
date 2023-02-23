import './Photo.css'

export const Photo = ({photo, setPhoto}) => {

    return(
        <div className='photo-container'>
            {photo ?
                <div className='photo-wraper'>
                    <img 
                        src={photo} 
                        alt="your photo"
                    />
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