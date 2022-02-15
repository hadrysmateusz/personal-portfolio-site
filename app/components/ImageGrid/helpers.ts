import React from "react"
import { LayoutType } from "~/components/ImageGrid/types"

export const getLayoutType = (children: React.ReactNode): LayoutType => {
  if (!Array.isArray(children)) {
    return "one-column"
  }
  if (!(children.length % 2 === 0) && children.length % 3 === 0) {
    return "three-column"
  }
  return "two-column"
}
