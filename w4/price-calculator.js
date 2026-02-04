// Define the price for a shirt (15) and giftwrap (2)
const shirtPrice = 15;
const giftWrapPrice = 2;

// Function to calculate total price
export const calculateTotal = function(orderData) {
    console.log('Inside the calculator');
    let total= orderData.qty * shirtPrice;
    // Using if to add giftwrapPrice
    if (orderData.giftWrap) {
        total += giftWrapPrice;
    }
    return {totalPrice: total};
}