
document.addEventListener("DOMContentLoaded", () => {
    console.log("User Event Management Script Loaded Successfully");
    const cartItems = [
        { name: "Event Ticket", price: "$50" },
        { name: "VIP Access", price: "$100" }
    ];

    const cartContainer = document.getElementById("cart-items");
    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `<p>${item.name}: ${item.price}</p>`;
        cartContainer.appendChild(cartItem);
    });
    document.getElementById("cancel").addEventListener("click", () => {
        cartContainer.innerHTML = "<p>All items canceled.</p>";
    });
});