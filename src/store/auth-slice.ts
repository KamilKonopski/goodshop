import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "src/interfaces/user";

interface IAuthState {
	user: IUser | null;
}

const getUserFromLocalStorage = () => {
	const userFromStorage = localStorage.getItem("user");
	if (userFromStorage) {
		const user = JSON.parse(userFromStorage) as IUser;
		return user;
	}
	return null;
};

const authInitialState: IAuthState = {
	user: getUserFromLocalStorage(),
};

const authSlice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		loginHandler(state: IAuthState, { payload }: PayloadAction<IUser>) {
			state.user = payload;
			localStorage.setItem("user", JSON.stringify(payload));
		},
		logoutHandler(state: IAuthState) {
			state.user = null;
			localStorage.removeItem("user");
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
