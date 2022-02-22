import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from "react"
import throttle from "lodash/throttle"

export type ScrollPositionContextValue = number | undefined

const ScrollPositionContext =
  React.createContext<ScrollPositionContextValue | null>(null)

export const useScrollPosition = () => {
  const ctx = useContext(ScrollPositionContext)
  // if (ctx === null || ctx === undefined) {
  //   throw new Error("useScrollPosition can't be used outside of provider")
  // }
  return ctx
}

const SCROLL_LISTENER_THROTTLE_LIMIT = 200

export const ScrollPositionProvider: React.FC = ({ children }) => {
  const [value, setScroll] = useState<number | undefined>(undefined)

  const updateScroll = useCallback(() => {
    setScroll(window?.scrollY)
  }, [])

  const throttledUpdateScroll = useMemo(
    () =>
      throttle(updateScroll, SCROLL_LISTENER_THROTTLE_LIMIT, { leading: true }),
    [updateScroll],
  )

  useEffect(() => {
    updateScroll()
    window?.addEventListener("scroll", throttledUpdateScroll)
    return () => window?.removeEventListener("scroll", throttledUpdateScroll)
  }, [throttledUpdateScroll, updateScroll])

  return (
    <ScrollPositionContext.Provider value={value}>
      {children}
    </ScrollPositionContext.Provider>
  )
}
