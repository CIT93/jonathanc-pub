//Defining a unique key for localStorage for our t-shirt order app

const LOCAL_STORAGE_KEY = 'ordersData'

//export function to save to the array
export const saveOrders = function(orders){
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        console.log('Data was saved successfully');
    } catch {
        console.error(`Error when saving data: ${error}`);
    }
};

export const loadOrders = function() {
    try {
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (dataString) {
            return JSON.parse(dataString);
        }
        return [];
    } catch (e) {
        console.error(`Error loading entries from localStorage: ${e}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
};