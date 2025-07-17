function calculateDiscount(price: number, discountPercentage: number) {
 if (price <= 0 && discountPercentage <= 0 ){
   return +(price * (discountPercentage /100)).toFixed(2)
 
 }
 
}