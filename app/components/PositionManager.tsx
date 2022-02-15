import React, { Reducer, useContext, useMemo, useReducer } from "react"

export type HomePageSection = "about" | "skills" | "projects"

export type PositionManagerState = {
  visibility: Record<HomePageSection, boolean>
}

export type PositionMangerAction = {
  type: "set-visibility"
  section: HomePageSection
  value: boolean
}

type PositionManagerReducer = Reducer<
  PositionManagerState,
  PositionMangerAction
>

// the final context value is extended by some computed values
type PositionManagerStateContextValue = PositionManagerState & {
  currentSection: HomePageSection | undefined
}

const PositionManagerStateContext =
  React.createContext<PositionManagerStateContextValue | null>(null)

const PositionManagerDispatchContext =
  React.createContext<React.Dispatch<PositionMangerAction> | null>(null)

export const usePositionManagerState = () => {
  const ctx = useContext(PositionManagerStateContext)
  if (!ctx) {
    throw new Error(
      "usePositionManagerState can't be accessed outside of provider",
    )
  }
  return ctx
}

export const usePositionManagerDispatch = () => {
  const ctx = useContext(PositionManagerDispatchContext)
  if (!ctx) {
    throw new Error(
      "usePositionManagerDispatch can't be accessed outside of provider",
    )
  }
  return ctx
}

export const positionManagerReducer: PositionManagerReducer = (
  state,
  action,
) => {
  switch (action.type) {
    case "set-visibility": {
      return {
        ...state,
        visibility: { ...state.visibility, [action.section]: action.value },
      }
    }
  }
}

export const PositionManager: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<PositionManagerReducer>(
    positionManagerReducer,
    {
      visibility: {
        about: false,
        skills: false,
        projects: false,
      },
    },
  )

  const currentSection: HomePageSection | undefined = useMemo(() => {
    if (state.visibility.projects) {
      return "projects"
    }
    if (state.visibility.skills) {
      return "skills"
    }
    if (state.visibility.about) {
      return "about"
    }
  }, [
    state.visibility.about,
    state.visibility.projects,
    state.visibility.skills,
  ])

  // useEffect(() => {
  //   console.log(currentSection)
  //   console.log(JSON.stringify(state, null, 2), state)
  // }, [currentSection, state])

  return (
    <PositionManagerStateContext.Provider value={{ ...state, currentSection }}>
      <PositionManagerDispatchContext.Provider value={dispatch}>
        {children}
      </PositionManagerDispatchContext.Provider>
    </PositionManagerStateContext.Provider>
  )
}
