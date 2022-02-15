import React from "react"

export type ImageProps = { src: string; alt?: string }

export type ImageGridProps = { children: React.ReactNode; sources: string[] }

export type LightboxController = {
  toggler: boolean
  source: string
}

export type LayoutType = "one-column" | "two-column" | "three-column"

export interface IWithLayoutType {
  layoutType: LayoutType
}
