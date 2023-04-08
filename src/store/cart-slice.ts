import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IProducts } from "src/interfaces/products";

interface ICart {
	products: IProducts[] | [];
	totalQuantity: number;
}

const cartInitialState: ICart = { products: [], totalQuantity: 0 };

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addItemtoCart(state, { payload }: PayloadAction<IProducts>) {
			const newItem = payload;
			const existingItem = state.products.find(
				(product) => product.id === newItem.id
			);
			state.totalQuantity++;

			// if (!existingItem) {
			// 	state.products.push();
			// } else {
			// 	existingItem.quantity++;
			// 	existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			// }
		},
		removeItemFromCart(state, { payload }: PayloadAction<number>) {
			const id = payload;
			const existingItem = state.products.find((product) => product.id === id);
			state.totalQuantity--;

			// if (existingItem.quantity === 1) {
			// 	state.products = state.products.filter((product) => product.id !== id);
			// } else {
			// 	existingItem.quantity--;
			// 	existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			// }
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
