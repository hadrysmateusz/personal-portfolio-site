import { css, DefaultTheme, ThemedCssFunction } from "styled-components"
import { ValueWithUnit } from "~/components/ValueWithUnit"

export type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl"

export const BREAKPOINTS = {
  xs: 480,
  sm: 768,
  md: 960,
  lg: 1024,
  xl: 1580,
} as const

export class Breakpoints {
  breakpoints: Record<BreakpointName, ValueWithUnit>
  from: Record<BreakpointName, ThemedCssFunction<DefaultTheme>>

  xs: ValueWithUnit
  sm: ValueWithUnit
  md: ValueWithUnit
  lg: ValueWithUnit
  xl: ValueWithUnit

  constructor() {
    this.xs = new ValueWithUnit(BREAKPOINTS["xs"], "px")
    this.sm = new ValueWithUnit(BREAKPOINTS["sm"], "px")
    this.md = new ValueWithUnit(BREAKPOINTS["md"], "px")
    this.lg = new ValueWithUnit(BREAKPOINTS["lg"], "px")
    this.xl = new ValueWithUnit(BREAKPOINTS["xl"], "px")

    this.breakpoints = {
      xs: this.xs,
      sm: this.sm,
      md: this.md,
      lg: this.lg,
      xl: this.xl,
    }

    this.from = (Object.keys(this.breakpoints) as BreakpointName[]).reduce(
      (acc, name) => {
        // noinspection UnnecessaryLocalVariableJS
        const cssMixin: ThemedCssFunction<DefaultTheme> = (
          ...props: any
        ) => css`
          @media (min-width: ${this.breakpoints[name].toString()}) {
            ${css(props)};
          }
        `
        acc[name] = cssMixin
        return acc
      },
      {} as Record<BreakpointName, ThemedCssFunction<DefaultTheme>>,
    )
  }
}

export const breakpoints = new Breakpoints()
