import { useCallback, useEffect, useRef, useState } from 'react'
import './MainScreen.css'
import {MainImage} from './MainImage'

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
               <MainImage />,
               <MainImage />,
               <MainImage />,
               <MainImage />,
               <MainImage />,
               <MainImage />,
               <MainImage />,
               <MainImage />,
               <MainImage />
            ]
        })
    }
    useEffect(()=>{
        addPhotos()
    },[])

    const observer = useRef()
    const lastPhotoRef = useCallback(element => {
        if(observer.current)
            observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                addPhotos()
            }
        })
        if(element) observer.current.observe(element)
    },[])

    return(
        <div className='main-screen'>
            <div className='main-head'>
                <h1>Edytor zdjęć</h1>
                <p>dasdqwed as fasdf asdf asd  asdafdsafasdf asf asdf asdf asdf asdfasdfweye tjmfjhjkdf hdffhgsd</p>
            </div>
            <div className='main-photos'>
                {photosList.map((imgEl, index)=>{
                    if(photosList.length === index + 1)
                        return <span ref={lastPhotoRef} key={index}>{imgEl}</span>
                    else
                        return <span key={index}>{imgEl}</span>
                })}
            </div>
        </div>
    )
}