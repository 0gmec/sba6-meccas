export class Products {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    sku: string
    

   constructor(id: number, title: string, description: string, category: string,
    price: number, discountPercentage: number, sku: string ) {

        this.id = id
        this.title = title
        this.description = description
        this.category = category
        this.price = price
        this.discountPercentage = discountPercentage
        this.sku = sku
   
      
    }
      
    displayDetails(): string {
        return `${this.id} && ${this.title} && ${this.description} && ${this.category}
        costs $${this.price} && ${this.discountPercentage} && ${this.sku}.`
    }

getPriceWithDiscount(): number {
    return this.price - (this.price * this.discountPercentage)
}



 }
    
   
    // "id": 1,
    //   "title": "Essence Mascara Lash Princess",
    //   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //   "category": "beauty",
    //   "price": 9.99,
    //   "discountPercentage": 7.17,
    //   "sku": "RCH45Q1A",

 