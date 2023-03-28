import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
	token: string | null;
	userName: string;
}

const authInitialState: IAuthState = {
	token: null || localStorage.getItem("token"),
	userName: "guest" || localStorage.getItem("userName"),
};

const authSlice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		loginHandler(
			state: IAuthState,
			{ payload }: PayloadAction<{ token: string; userName: string | null }>
		) {
			state.token = payload.token;
			localStorage.setItem("token", payload.token);
			if (payload.userName) {
				state.userName = payload.userName;
				localStorage.setItem("userName", payload.userName);
			}
		},
		logoutHandler(state: IAuthState) {
			state.token = null;
			localStorage.removeItem("token");
			state.userName = "guest";
			localStorage.removeItem("userName");
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
