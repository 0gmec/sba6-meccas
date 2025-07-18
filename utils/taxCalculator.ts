import { Products } from "../models/Product"

 const taxRate = 0.3
const standardTaxRate = 0.0475

export function calculateTax(price: number, category: string): number {
if (category === "groceries"){
    return taxRate * price
} if (category !== "groceries"){
    return standardTaxRate * price
} else {
    return price * (price - standardTaxRate)
}
 

}

console.log(calculateTax(20, "groceries"))