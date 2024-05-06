interface Store {
    name: string;
}

class Store {
    constructor(name: string) {
        this.name = name;
    }

    sayName(){
        console.log(this.name);
        return this.name;
    }
}

class Product {
    
}

/**
 * Design a system for a simple e-commerce store.
 * The store should have products
 * Each product should have a name, desc, price, and quantity in stock
 * Customer should be able toa dd products to a shopping cart
 * Customers should be able to checkout
 * The system should update the quantity of the product after checkout
 */