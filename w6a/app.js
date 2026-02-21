// Import from order-handler.js
import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js"; 
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from './order-storage.js';


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
    orderStorage.saveOrders(orders);
    console.log (orders);
    resultsDisplay.displayOrder(newOrder);
}
// Initialization function
const init = function(){
    const loadedOrders = orderStorage.loadOrders()
    if (loadedOrders.length > 0) {
        orders.push(...loadedOrders);
        console.log('Orders loaded!');
    }
    orderFormElement.addEventListener('submit', handleOrderSubmit);
}
// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', init);