// Import from order-handler.js
import * as orderForm from "./order-handler.js";

// Setup elements
const orderFormElement = document.getElementById('order-form');
const orderSumDiv = document.getElementById('order-summary');

// Handles form submission
const handleOrderSubmit = function(event) {
    event.preventDefault()
    const orderData = orderForm.getOrderInputs();

    orderSumDiv.textContent = `Order Summary: Quantity: ${orderData.qty}, Gift Wrap: ${orderData.giftWrap}, Size: ${orderData.size}. Thank you for your order!`;
}
// Initialization function
const init = function(){
    orderFormElement.addEventListener('submit', handleOrderSubmit);
}
// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', init);