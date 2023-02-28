import { useCallback, useEffect, useRef, useState } from 'react'
import './MainScreen.css'
import {MainImage} from './MainImage'

export const MainScreen = ({setGoToEditor, setPhoto}) => {
    const [photosList, setPhotosList] = useState([])
    const [choosenPhoto, setChoosenPhoto] = useState(null)

    useEffect(()=>{
        if(choosenPhoto){
            setPhoto(choosenPhoto)
            //onsole.log(choosenPhoto)
            setGoToEditor(true)
        }
    },[choosenPhoto])

    const addPhotos = () => {
        setPhotosList(prevList => {
            return[
                ...prevList,
               <MainImage setChoosenPhoto={setChoosenPhoto}/>,
               <MainImage setChoosenPhoto={ setChoosenPhoto}/>,
               <MainImage setChoosenPhoto={ setChoosenPhoto}/>,
               <MainImage setChoosenPhoto={ setChoosenPhoto}/>,
               <MainImage setChoosenPhoto={setChoosenPhoto}/>
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
                <p><button onClick={()=>setGoToEditor(true)}>Przejdź do edytora</button> lub wybierz jedno ze zdjęć</p>
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