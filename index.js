document.addEventListener("DOMContentLoaded", () => {
    // Adjust quantity of items
    document.querySelectorAll(".btn-increase").forEach(button => {
        button.addEventListener("click", () => {
            const quantityElement = button.previousElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotal();
        });
    });

    document.querySelectorAll(".btn-decrease").forEach(button => {
        button.addEventListener("click", () => {
            const quantityElement = button.nextElementSibling;
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        });
    });

    // Delete items from the cart
    document.querySelectorAll(".btn-delete").forEach(button => {
        button.addEventListener("click", () => {
            const itemRow = button.closest(".cart-item");
            itemRow.remove();
            updateTotal();
        });
    });

    // Like items
    document.querySelectorAll(".btn-like").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
        });
    });

    // Update total price
    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            const price = parseFloat(item.querySelector(".item-price").textContent.replace("$", ""));
            const quantity = parseInt(item.querySelector(".item-quantity").textContent);
            total += price * quantity;
        });
        document.querySelector("#total-price").textContent = `$${total.toFixed(2)}`;
    }
});
