const qtyInput = document.getElementById("qty");
const giftWrapCheck = document.getElementById("gift-wrap");
const sizeRadio = document.querySelectorAll('input[name="size"]');

const getSelectedRadioValue = function() {
    for (const radio of sizeRadio) {
        if (radio.checked) {
            return radio.value
        }
    }
};

export function getOrderInputs() {
    const orderData = {
        qty: parseInt(qtyInput.value) || 1,
        giftWrap: giftWrapCheck.checked,
        size: getSelectedRadioValue()
    };
    return orderData;
}

// Temporary Test
console.log(getOrderInputs());
