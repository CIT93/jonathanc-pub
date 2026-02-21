// Form elements: Qty, Gift Wrap, Size

const qtyInput = document.getElementById("qty");
const giftWrapCheck = document.getElementById("gift-wrap");
const sizeRadio = document.querySelectorAll('input[name="size"]');

// Helper function that gets the value of the radio button 
const getSelectedRadioValue = function() {
    for (const radio of sizeRadio) {
        if (radio.checked) {
            return radio.value
        }
    }
};

// Export function to get the order inputs
export function getOrderInputs() {
    const orderData = {
        qty: parseInt(qtyInput.value) || 1,
        giftWrap: giftWrapCheck.checked,
        size: getSelectedRadioValue()
    };
    return orderData;
}
