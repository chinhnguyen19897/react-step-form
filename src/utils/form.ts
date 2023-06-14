import { EPriceUnit } from "types/form.ts"

export const formatPrice = (price: string, units: EPriceUnit) => {
  switch (units) {
    case EPriceUnit.MONTHLY:
      return `$${price}/mo`
    case EPriceUnit.YEARLY:
      return `$${price}/yr`
    default:
      return `$${price}`
  }
}

export const formatCost = (cost: number, units: EPriceUnit) => {
  switch (units) {
    case EPriceUnit.MONTHLY:
      return `+$${cost}/mo`
    case EPriceUnit.YEARLY:
      return `+$${cost}/yr`
    default:
      return `+$${cost}`
  }
}
