// Import from order-handler.js
import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js"; 
import * as orderSum from "./orderSum-display.js";

// Setup elements
const orderFormElement = document.getElementById('order-form');
// const orderSumDiv = document.getElementById('order-summary');

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

    orderSum.orderSummary(newOrder);
}
// Initialization function
const init = function(){
    orderFormElement.addEventListener('submit', handleOrderSubmit);
}
// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', init);