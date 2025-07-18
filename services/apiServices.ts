import  {Products} from "../models/Product"

async function fetchProductData() {
    try {
const response = await fetch('https://dummyjson.com/products')
let productData = await response. json()
console.log(productData)

}catch (error) {
    console.log("Error:", error)
}

}
