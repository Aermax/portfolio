"use client"

import React, { useState, useEffect } from "react"
import { Blurhash } from "react-blurhash"

const NEWIMG = ({
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
      setIsImgLoaded(false)
    }
    img.src = src
  }, [src])

  return (
    <>
      {!isImgLoaded && (
        <div className="w-full h-full rounded-sm object-cover">
          <Blurhash
            className={className}
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
            style={{ borderRadius: "100px" }}
          ></Blurhash>
        </div>
      )}
      {isImgLoaded && <img fill src={src} alt="img" className={className} />}
    </>
  )
}

export default NEWIMG
