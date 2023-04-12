import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IProducts } from "src/interfaces/products";

interface ICart {
	products: IProducts[];
	totalQuantity: number;
}

const cartInitialState: ICart = {
	products: [] as IProducts[],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addItemtoCart(
			state: ICart,
			{ payload }: PayloadAction<{ product: IProducts; quantity: number }>
		) {
			const newItem = payload.product;
			const quantity = payload.quantity;
			const existingItem: IProducts | null =
				state.products.find((product) => product.id === newItem.id) ?? null;
			state.totalQuantity++;

			if (!existingItem) {
				newItem.quantity = quantity;
				newItem.totalPrice = newItem.price * quantity;
				state.products.push(newItem);
			} else {
				existingItem.quantity = quantity;
				existingItem.totalPrice = newItem.price * quantity;
			}
		},
		removeItemFromCart(state: ICart, { payload }: PayloadAction<number>) {
			const id = payload;
			const existingItem: IProducts | null =
				state.products.find((product) => product.id === id) ?? null;
			state.totalQuantity--;

			if (existingItem) {
				if (existingItem.quantity === 1) {
					state.products = state.products.filter(
						(product) => product.id !== id
					);
				} else {
					existingItem.quantity--;
					existingItem.totalPrice =
						existingItem.totalPrice - existingItem.price;
				}
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
