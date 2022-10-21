import {createSlice} from "@reduxjs/toolkit";

const defaultCartState = {
    items: [],
    totalQty: 0,
    totalAmount: 0,
    changed: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultCartState,
    reducers: {
        replaceCart(state, action) {

        },
        clearCart(state) {
            state.items = []
            state.totalQty = 0
            state.totalAmount = 0
            state.changed = false
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items?.find((item) => item.id === newItem.id);

            if (!existingItem) {
                console.log(`newItem.id`, newItem.id)
                console.log(`no such item`)

                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                }); // it is not manipulating the existing state because of redux toolkit!!!
            } else {
                console.log(`newItem.id`, newItem.id)
                console.log(`item.id`, existingItem.id)

                existingItem.quantity = existingItem.quantity + newItem.quantity
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
            state.totalQty++;
            state.totalAmount = state.totalAmount + newItem.price;
            state.changed = true
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id) // it is not manipulating the existing state because of redux toolkit!!!
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
            state.totalQty--;
            state.totalAmount = state.totalAmount - existingItem.price;
            state.changed = true
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer