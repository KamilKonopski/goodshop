import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.scss";

const Login = ({
	onLogin,
}: {
	onLogin: (username: string, password: string) => void;
}) => {
	const [values, setValues] = useState<{ username: string; password: string }>({
		username: "",
		password: "",
	});
	const [error, setError] = useState<string>("");
	const navigate = useNavigate();

	const handleChangeValues = (event: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (values.username === "" && values.password === "") {
			setError("Entered your values!");
			return;
		}

		if (values.username !== "kminchelle" && values.password === "0lelplR") {
			setError("Login failed. Check username and password and try again!");
			return;
		}

		onLogin(values.username, values.password);

		setValues({
			username: "",
			password: "",
		});
		navigate("/");
	};

	return (
		<form className={classes.login} onSubmit={handleSubmitForm}>
			<div className={classes["login__item"]}>
				<label className={classes["login__label"]} htmlFor="username">
					Username
				</label>
				<input
					className={classes["login__input"]}
					type="text"
					id="username"
					name="username"
					placeholder="Enter your username"
					value={values.username}
					onChange={handleChangeValues}
				/>
			</div>
			<div className={classes["login__item"]}>
				<label className={classes["login__label"]} htmlFor="password">
					Password
				</label>
				<input
					className={classes["login__input"]}
					type="password"
					id="password"
					name="password"
					placeholder="Enter your password"
					value={values.password}
					onChange={handleChangeValues}
				/>
			</div>
			{error && <span className={classes["login__error"]}>{error}</span>}
			<button className={classes["login__button"]}>Login</button>
		</form>
	);
};

export default Login;
