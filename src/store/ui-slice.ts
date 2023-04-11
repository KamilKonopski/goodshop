import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProducts } from "src/interfaces/products";

interface IUIState {
	favouriteProducts: IProducts[];
}

const getFavouriteProductsFromLocalStorage = () => {
	const favouriteProductsFromStorage =
		localStorage.getItem("favourite-products");
	if (favouriteProductsFromStorage) {
		const favouriteProducts = JSON.parse(
			favouriteProductsFromStorage
		) as IProducts[];
		return favouriteProducts;
	}
	return [] as IProducts[];
};

const uiInitialState: IUIState = {
	favouriteProducts: getFavouriteProductsFromLocalStorage(),
};

const uiSlice = createSlice({
	name: "ui",
	initialState: uiInitialState,
	reducers: {
		addToFavourite(state: IUIState, { payload }: PayloadAction<IProducts>) {
			if (payload) {
				state.favouriteProducts.push(payload);
				localStorage.setItem(
					"favourite-products",
					JSON.stringify(state.favouriteProducts)
				);
			}
		},
		removeFromFavourite(state: IUIState, { payload }: PayloadAction<number>) {
			if (state.favouriteProducts.length) {
				state.favouriteProducts = state.favouriteProducts.filter(
					(fav) => fav.id !== payload
				);
				localStorage.setItem(
					"favourite-products",
					JSON.stringify(state.favouriteProducts)
				);
			}
			if (state.favouriteProducts.length === 0) {
				localStorage.removeItem("favourite-products");
			}
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
