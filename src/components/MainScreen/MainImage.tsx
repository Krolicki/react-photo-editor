import { useRef, useState } from "react";

type MainImageProps = {
    setChoosenPhoto: React.Dispatch<React.SetStateAction<string | null>>,
    photosCount: number
}

export const MainImage = ({setChoosenPhoto, photosCount} : MainImageProps) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    function handleImageLoad() {
        setImageLoaded(true)
    }
    function handleClick({target} : React.MouseEvent<HTMLImageElement>){
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = 600
        canvas.height = 600
        ctx?.drawImage(target as CanvasImageSource, 0, 0)
        canvas.toBlob(function(blob) {
            if(blob)
                setChoosenPhoto(URL.createObjectURL(blob))
        })
    }

    return (
        <img
            className={imageLoaded ? "appear" : ""}
            crossOrigin="anonymous"
            src={`https://picsum.photos/600/600?random=${photosCount}`}
            alt="random image from picsum"
            onClick={(e)=>handleClick(e)}
            onLoad={handleImageLoad}
        />
    )
}