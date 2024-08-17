import { useRef, useState } from "react";

type MainImageProps = {
    setChoosenPhoto: React.Dispatch<React.SetStateAction<string | null>>
}

export const MainImage = ({setChoosenPhoto} : MainImageProps) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const size = useRef(Math.floor(Math.random() * 10 + 600))

    function handleImageLoad() {
        setImageLoaded(true)
    }
    function handleClick({target} : React.MouseEvent<HTMLImageElement>){
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = size.current
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
            //src={`https://source.unsplash.com/${size.current}x300/?random`}
            src={`https://picsum.photos/${size.current}/600`}
            alt="random image from picsum"
            onClick={(e)=>handleClick(e)}
            onLoad={handleImageLoad}
        />
    )
}