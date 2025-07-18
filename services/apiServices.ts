import  {Products} from "../models/Product"

export async function fetchProductData() {
    try {
const response = await fetch('https://dummyjson.com/products')
const productData = await response. json()
console.log(productData)

}catch (error) {
    throw new Error("error fetching product data")
    
}

}
