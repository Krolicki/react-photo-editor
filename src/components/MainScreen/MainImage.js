import { useRef, useState } from "react";

export const MainImage = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const size = useRef(Math.floor(Math.random() * (500 - 300) + 300))

    function handleImageLoad() {
        setImageLoaded(true)
    }

    return (
        <img
            className={imageLoaded ? "appear" : ""}
            src={`https://source.unsplash.com/random/${size.current}x300`}
            alt='unsplash'
            onLoad={handleImageLoad}
        />
    )
}