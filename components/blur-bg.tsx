"use client"

import React, { useState, useEffect } from "react"
import { Blurhash, BlurhashCanvas } from "react-blurhash"

const BlurBG = ({
  src,
  hash,
  className
}: {
  src: string
  hash: string
  className: string
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setIsImgLoaded(true)
    }
    img.src = src
  }, [src])

  return (
    <>
      {!isImgLoaded && (
        <div className="w-full h-full rounded-sm object-cover">
          <BlurhashCanvas
            className={className}
            hash={hash}
            width={100}
            punch={1}
            style={{ borderRadius: "10px" }}
          ></BlurhashCanvas>
        </div>
      )}
      {isImgLoaded && <img src={src} alt="img" className={className} />}
    </>
  )
}

export default BlurBG
