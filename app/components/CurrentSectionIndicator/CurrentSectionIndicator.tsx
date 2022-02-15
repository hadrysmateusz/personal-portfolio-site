import { usePositionManagerState } from "~/components/PositionManager"
import { CurrentSectionIndicatorWrapper } from "./CurrentSectionIndicator.styles"

export const CurrentSectionIndicator = () => {
  const { currentSection } = usePositionManagerState()

  return currentSection !== undefined ? (
    <CurrentSectionIndicatorWrapper>
      <div>{currentSection}</div>
    </CurrentSectionIndicatorWrapper>
  ) : null
}
