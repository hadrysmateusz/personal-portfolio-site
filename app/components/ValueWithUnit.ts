export class ValueWithUnit {
  value: number
  unit: string

  constructor(value: number, unit: string) {
    this.value = value
    this.unit = unit
  }

  toString() {
    return `${this.value}${this.unit}`
  }
}