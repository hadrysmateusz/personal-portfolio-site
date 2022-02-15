import React, { useCallback, useContext, useState } from "react"
import FsLightbox from "fslightbox-react"
import {
  ImageGridProps,
  ImageProps,
  LightboxController,
} from "~/components/ImageGrid/types"

import { getLayoutType } from "./helpers"
import { ImageGridWrapper } from "./ImageGrid.styles"

export const ImageGridContext = React.createContext<{
  openLightbox: (source: string) => void
  lightboxController: LightboxController
} | null>(null)

const useImageGridContext = () => {
  const ctx = useContext(ImageGridContext)
  if (!ctx) {
    throw new Error("useImageGridContext can't be used outside of provider")
  }
  return ctx
}

const Image = ({ src, alt = "" }: ImageProps) => {
  const { openLightbox } = useImageGridContext()
  return <img src={src} onClick={() => openLightbox(src)} alt={alt} />
}

export const ImageGrid = ({ sources, children }: ImageGridProps) => {
  const [lightboxController, setLightboxController] =
    useState<LightboxController>({
      toggler: false,
      source: sources[0],
    })

  const openLightbox = useCallback((source: string) => {
    setLightboxController((prev) => ({
      toggler: !prev.toggler,
      source,
    }))
  }, [])

  return (
    <ImageGridContext.Provider value={{ lightboxController, openLightbox }}>
      <FsLightbox
        sources={sources}
        source={lightboxController.source}
        toggler={lightboxController.toggler}
      />
      <ImageGridWrapper layoutType={getLayoutType(children)}>
        {children}
      </ImageGridWrapper>
    </ImageGridContext.Provider>
  )
}

ImageGrid.Image = Image
