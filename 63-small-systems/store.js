class Store {
    constructor(name, products = {}) {
        this.name = name;
        this.products = products;
    }

    checkout(customer) {
        // remove customer's items from store's stock, reset customer's cart
        let total = 0;
        Object.keys(customer.products).forEach((product) => {
            product = customer.products[product];
            let numToBuy = product.quantity;
            while (numToBuy > 0 && this.products[product.name].quantity > 0) {
                this.products[product.name].quantity -= 1;
                numToBuy--;
                total += product.price;
            }

            if (numToBuy > 0) {
                console.log(`No stock remaining for ${product.name}. Purchased ${product.quantity - numToBuy} of this item.`);
            }
        });
        customer.products = {};
        return `Your total is $${total}.00. Thank you for shopping at ${this.name}.`;
    }

    addToCustomersCart(customer, productName, amount = 1) {
        if (!this.products[[productName]]) {
            return `${this.name} doesn't stock ${productName} right now.`
        }
        if (this.products[[productName]].quantity) {
            customer.products[[productName]] ? customer.products[[productName]].quantity += amount : customer.products[[productName]] = { ...this.products[[productName]], quantity: amount }
            return `Added ${productName} to ${customer.name}'s cart!`
        }
        if (this.products[[productName]] && !!this.products[[productName]].quantity) {
            return `Oof, ${productName} is sold out.`
        }

        // default if alt path occurs:
        return `Trouble adding ${productName} to ${customer.name}'s cart. Please contact customer service.`
    }

    viewProducts() {
        const inStock = Object.keys(this.products).filter((product) => {
            if (this.products[product].quantity) {
                return true;
            }
            return false;
        })
        inStock.length ? console.log(inStock) : console.log('All products sold out!');
    }
}

class Product {
    constructor(name, price, description, quantity) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
}

class Customer {
    constructor(name) {
        this.name = name;
        this.products = {}
    }
}
let banana = new Product('banana', 1, 'yellow tubular fruit', 10);
let steak = new Product('steak', 5, 'lab grown meat', 10);
let bread = new Product('bread', 2, 'fresh baked focaccia', 10);
const store = new Store('Good Buyers Buy Right MegaChurch Gift Shop', { banana, steak, bread });
const ripley = new Customer('Ripley');
// store.addToCustomersCart(ripley, 'bread', 11);
// store.addToCustomersCart(ripley, 'banana', 2);
// store.addToCustomersCart(ripley, 'steak');
// store.addToCustomersCart(ripley, 'heavy aircraft defense missiles');
// console.log(ripley.products);
// store.checkout(ripley);
// store.viewProducts();



/**
 * Design a system for a simple e-commerce store.
 * The store should have products
 * Each product should have a name, desc, price, and quantity in stock
 * Customers should be able to add products to a shopping cart
 * Customers should be able to checkout
 * The system should update the quantity of the product after checkout
 */