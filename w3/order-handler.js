// References 
const orderForm = document.getElementById('order-form');
const quantityInput = orderForm.querySelector('#qty');
const isGiftWrapInput = orderForm.querySelector('#gift-wrap');
const sizeRadios = orderForm.querySelectorAll('input [name="size"]');

const getSelectedRadioValue = function(radioButtons) {
    for (const radio of radioButtons)
        if (radio.checked) {
            console.log(`${radio.value} has an attribute of ${radio.checked}`);
            return radio.value;
        }
}

export const getOrderInputs = function() {
    console.log('Get order form inputs')
    return {
        qty: parseInt(quantityInput.value) || 1,
        giftWrap: isGiftWrapInput.checked,
        size: getSelectedRadioValue(sizeRadios)
    }
};