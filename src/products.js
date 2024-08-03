import test from './assets/test.jpg'

const PRODUCTS = [
    {
        id: 1,
        token: "prod_Qakqp0zvQDGXI2",
        productName: "1",
        price: 1.00,
        productImage: test,
    },
    {
        id: 2,
        token: "prod_OV17DouM2aaWK3",
        productName: "2",
        price: 2.00,
        productImage: test,
    },
    {
        id: 3,
        token: "prod_Qakr58E6AKjvYQ",
        productName: "3",
        price: 3.00,
        productImage: test,
    },
    {
        id: 4,
        itokend: "prod_QaksbwW0Tlrqnw",
        productName: "4",
        price: 4.00,
        productImage: test,
    },
    {
        id: 5,
        token: "prod_QakskLoSsYk5dJ",
        productName: "5",
        price: 5.00,
        productImage: test,
    },
    {
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
    }
];

function getProductData(id) {
    let productData = PRODUCTS.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { PRODUCTS, getProductData };