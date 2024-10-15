import test from './assets/test.jpg'

const PRODUCTS = [
    {
        id: "prod_Qakqp0zvQDGXI2",
        productName: "a",
        price: 1.00,
        productImage: test,
    },
    {
        id: "prod_OV17DouM2aaWK3",
        productName: "b",
        price: 2.00,
        productImage: test,
    },
    {
        id: "prod_Qakr58E6AKjvYQ",
        productName: "c",
        price: 3.00,
        productImage: test,
    },
    {
        id: "prod_QaksbwW0Tlrqnw",
        productName: "d",
        price: 4.00,
        productImage: test,
    },
    {
        id: 5,
        token: "prod_QakskLoSsYk5dJ",
        productName: "e",
        price: 5.00,
        productImage: test,
    },
    /**{
        id: 6,
        token: "prod_QakszhGfJ6edav",
        productName: "6",
        price: 6.00,
        productImage: test,
    },
    {
        id: 7,
        token: "prod_QaksZlkymWVGhc",
        productName: "7",
        price: 7.00,
        productImage: test,
    },
    {
        id: 8,
        token: "prod_QaksVIcsXQ31qh",   
        productName: "8",
        price: 8.00,
        productImage: test,
    }**/
];

function getProductData(id) {
    let productData = PRODUCTS.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for " + productName);
        return undefined;
    }

    return productData;
}

export { PRODUCTS, getProductData };