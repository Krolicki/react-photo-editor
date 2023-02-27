import { useEffect, useState } from 'react'
import './MainScreen.css'

export const MainScreen = () => {
    const [photosList, setPhotosList] = useState([])

    const addPhotos = () => {
        // const newPhotos = [
        //     <img alt='unsplash' src="https://source.unsplash.com/random/300×300" />,
        //     <img alt='unsplash' src="https://source.unsplash.com/random/400×300" />,
        //     <img alt='unsplash' src="https://source.unsplash.com/random/200×300" />,
        //     <img alt='unsplash' src="https://source.unsplash.com/random/600×300" />,
        //     <img alt='unsplash' src="https://source.unsplash.com/random/500×300" />
        // ]
        setPhotosList(prevList => {
            return[
                ...prevList,
                <img alt='unsplash' src="https://source.unsplash.com/random/300x300" />,
                <img alt='unsplash' src="https://source.unsplash.com/random/400x300" />,
                <img alt='unsplash' src="https://source.unsplash.com/random/200x300" />,
                <img alt='unsplash' src="https://source.unsplash.com/random/600x300" />,
                <img alt='unsplash' src="https://source.unsplash.com/random/500x300" />
            ]
        })
    }
    useEffect(()=>{
        addPhotos()
    },[])
    return(
        <div className='main-screen'>
            <div className='main-head'>
                <h1>Edytor zdjęć</h1>
                <p>dasdqwed as fasdf asdf asd  asdafdsafasdf asf asdf asdf asdf asdfasdfweye tjmfjhjkdf hdffhgsd</p>
            </div>
            <div className='main-photos'>
                {photosList.map((imgEl, index)=>{
                    return <>{imgEl}</>
                })}
            </div>
        </div>
    )
}