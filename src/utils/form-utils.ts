import {PriceUnit} from "@types/form.ts";

export const formatPrice = (price: string, units: PriceUnit) => {
    switch (units) {
        case PriceUnit.MONTHLY:
            return `$${price}/mo`;
        case PriceUnit.YEARLY:
            return `$${price}/yr`;
        default:
            return `$${price}`;
    }
}

export const formatCost = (cost: number, units: PriceUnit) => {
    switch (units) {
        case PriceUnit.MONTHLY:
            return `+$${cost}/mo`;
        case PriceUnit.YEARLY:
            return `+$${cost}/yr`;
        default:
            return `+$${cost}`;
    }
}