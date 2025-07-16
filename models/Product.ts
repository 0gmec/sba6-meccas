class Products {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountedPercentage: number
    sku: string

   constructor(id: number, title: string, description: string, category: string,
    price: number, discountedPercentage: number, sku: string ) {

        this.id = id
        this.title = title
        this.description = description
        this.category = category
        this.price = price
        this.discountedPercentage = discountedPercentage
        this.sku = sku
   
      
    }
      
 }
    
   
    // "id": 1,
    //   "title": "Essence Mascara Lash Princess",
    //   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    //   "category": "beauty",
    //   "price": 9.99,
    //   "discountPercentage": 7.17,
    //   "sku": "RCH45Q1A",

 