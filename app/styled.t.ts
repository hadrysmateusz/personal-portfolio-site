import "styled-components/macro"
import { Breakpoints } from "~/components/Breakpoints"

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Breakpoints
  }
}
