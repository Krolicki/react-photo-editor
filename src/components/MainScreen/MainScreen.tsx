import { useCallback, useEffect, useRef, useState } from 'react'
import './MainScreen.css'
import {MainImage} from './MainImage'

type MainScreenProps = {
    setGoToEditor: React.Dispatch<React.SetStateAction<boolean>>
    setPhoto: React.Dispatch<React.SetStateAction<string | null>>
}
 
export const MainScreen = ({setGoToEditor, setPhoto} : MainScreenProps) => {
    const [photosList, setPhotosList] = useState<React.ReactNode[]>([])
    const [choosenPhoto, setChoosenPhoto] = useState<string | null>(null)
    const [photosCount, setPhotosCount] = useState<number>(0)

    useEffect(()=>{
        if(choosenPhoto){
            setPhoto(choosenPhoto)
            setGoToEditor(true)
        }
    },[choosenPhoto, setPhoto, setGoToEditor])

    const addPhotos = (currentCount: number) => {
        setPhotosList(prevList => {
            return[
                ...prevList,
               <MainImage setChoosenPhoto={setChoosenPhoto} photosCount={currentCount}/>,
               <MainImage setChoosenPhoto={setChoosenPhoto} photosCount={currentCount+1}/>,
               <MainImage setChoosenPhoto={setChoosenPhoto} photosCount={currentCount+2}/>,
               <MainImage setChoosenPhoto={setChoosenPhoto} photosCount={currentCount+3}/>,
               <MainImage setChoosenPhoto={setChoosenPhoto} photosCount={currentCount+4}/>
            ]
        })
    }
    useEffect(()=>{
        addPhotos(photosCount)
    },[])

    const observer = useRef<IntersectionObserver>()
    const lastPhotoRef = useCallback<React.RefCallback<HTMLElement>>(element => {
        if(observer.current)
            observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPhotosCount(currentCount => {
                    const newCount = currentCount + 5
                    addPhotos(newCount)
                    return newCount
                })
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
                    //console.log(photosCount)
                    if(photosList.length === index + 1)
                        return <span ref={lastPhotoRef} key={index}>{imgEl}</span>
                    else
                        return <span key={index}>{imgEl}</span>
                })}
            </div>
        </div>
    )
}