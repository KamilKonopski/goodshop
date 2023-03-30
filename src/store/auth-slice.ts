import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "src/interfaces/user";

interface IAuthState {
	token: string | null;
	fullName: string | null;
	image: string | null;
}

const authInitialState: IAuthState = {
	token: null || localStorage.getItem("token"),
	fullName: null || localStorage.getItem("fullname"),
	image: null || localStorage.getItem("image"),
};

const authSlice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		loginHandler(state: IAuthState, { payload }: PayloadAction<IUser>) {
			state.token = payload.token;
			localStorage.setItem("token", payload.token);
			state.fullName = `${payload.firstName} ${payload.lastName}`;
			localStorage.setItem(
				"fullname",
				`${payload.firstName} ${payload.lastName}`
			);
			state.image = payload.image;
			localStorage.setItem("image", payload.image);
		},
		logoutHandler(state: IAuthState) {
			state.token = null;
			localStorage.removeItem("token");
			state.fullName = null;
			localStorage.removeItem("fullname");
			state.image = null;
			localStorage.removeItem("image");
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
