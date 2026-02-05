// Import from order-handler.js
import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js"; 

// Setup elements
const orderFormElement = document.getElementById('order-form');
const orderSumDiv = document.getElementById('order-summary');

const orders = [];

// Handles form submission
const handleOrderSubmit = function(event) {
    event.preventDefault()
    const orderData = orderForm.getOrderInputs();
    const priceData = priceCalculator.calculateTotal(orderData);

    const newOrder = {
        ...orderData,
        ...priceData,
        timestamp: new Date().toISOString()
    }
    orders.push(newOrder);
    console.log(orders);

    orderSumDiv.textContent = `Order Summary: Quantity: ${orderData.qty}, Gift Wrap: ${orderData.giftWrap}, Size: ${orderData.size}. Your total is $${priceData.totalPrice}.Thank you for your order!`;
}
// Initialization function
const init = function(){
    orderFormElement.addEventListener('submit', handleOrderSubmit);
}
// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', init);