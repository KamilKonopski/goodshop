import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

export const createStore = () =>
	configureStore({
		reducer: {
			auth: authSlice.reducer,
			ui: uiSlice.reducer,
			cart: cartSlice.reducer,
		},
	});

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
