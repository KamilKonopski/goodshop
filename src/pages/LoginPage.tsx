import React from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/auth-slice";

import Login from "../components/Login/Login";

import { IUser } from "../interfaces/user";

import useDocumentTitle from "../hooks/useDocumentTitle";

const LoginPage: React.FC = () => {
	useDocumentTitle("- login");

	const dispatch = useDispatch();

	const handleLogin = (username: string, password: string) => {
		fetch("https://dummyjson.com/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data: IUser) => dispatch(authActions.loginHandler(data)));
	};

	return <Login onLogin={handleLogin} />;
};

export default LoginPage;
