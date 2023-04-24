import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { authActions } from "../store/auth-slice";

import Login from "../components/Login/Login";

import { IUser } from "../interfaces/user";

import useDocumentTitle from "../hooks/useDocumentTitle";

const LoginPage: React.FC = () => {
	useDocumentTitle("- login");

	const dispatch = useDispatch();

	const handleLogin = (username: string, password: string) => {
		axios
			.post("https://dummyjson.com/auth/login", {
				username,
				password,
			})
			.then((res) => res.data)
			.then((data: IUser) => dispatch(authActions.loginHandler(data)));
	};

	return <Login onLogin={handleLogin} />;
};

export default LoginPage;
