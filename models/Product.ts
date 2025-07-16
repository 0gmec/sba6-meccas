class Product {
    name: string
    price: number

    constructor (name: string, price: number) {
        this.name = name
        this.price = price 
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price}`
    }
}