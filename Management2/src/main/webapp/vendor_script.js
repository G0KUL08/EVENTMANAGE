
document.addEventListener("DOMContentLoaded", () => {
    console.log("Vendor Management Script Loaded Successfully");
    const productList = document.getElementById("product-list");
    const products = [
        { name: "Laptop", price: "$1200", quantity: 10 },
        { name: "Smartphone", price: "$800", quantity: 20 }
    ];

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p><p>Quantity: ${product.quantity}</p>`;
        productList.appendChild(productItem);
    });
});