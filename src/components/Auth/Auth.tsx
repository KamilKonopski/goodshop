/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";

import { RootState } from "src/store";
import { authActions } from "../../store/auth-slice";

import classes from "./Auth.module.scss";

const Auth: React.FC = () => {
	const [showProfile, setShowProfile] = useState<boolean>(false);
	const user = useSelector((state: RootState) => state.auth.user);
	const dispatch = useDispatch();

	const handleLogout = () => {
		setShowProfile((prev) => !prev);
		dispatch(authActions.logoutHandler());
	};

	return (
		<>
			<div className={classes.auth}>
				{!user?.firstName ? (
					<span
						onClick={() => setShowProfile((prev) => !prev)}
						className={classes["auth__guest"]}
					>
						Hello, guest{" "}
						<RiArrowDropDownLine
							style={
								showProfile
									? {
											transform: "rotate(180deg)",
											transition: "all 0.2s linear",
									  }
									: {
											transform: "rotate(0)",
											transition: "all 0.2s linear",
									  }
							}
							size={25}
							color="#a5a8ad"
						/>
					</span>
				) : (
					<div
						className={classes.auth}
						onClick={() => setShowProfile((prev) => !prev)}
					>
						{user.image && (
							<div className={classes["auth__image-container"]}>
								<img
									className={classes["auth__image"]}
									src={user.image}
									alt=""
								/>
							</div>
						)}
						<RiArrowDropDownLine
							style={
								showProfile
									? {
											transform: "rotate(180deg)",
											transition: "all 0.2s linear",
											cursor: "pointer",
									  }
									: {
											transform: "rotate(0)",
											transition: "all 0.2s linear",
											cursor: "pointer",
									  }
							}
							size={25}
							color="#a5a8ad"
						/>
					</div>
				)}

				{showProfile && (
					<div className={classes["auth__profile"]}>
						{user?.username && (
							<span className={classes["auth__name"]}>
								Hello, {user.username}
							</span>
						)}
						{!user?.firstName ? (
							<div className={classes["auth__buttons"]}>
								<Link
									onClick={() => setShowProfile((prev) => !prev)}
									to="/login"
									className={classes["auth__button"]}
								>
									Login
								</Link>
							</div>
						) : (
							<div className={classes["auth__buttons"]}>
								<Link
									onClick={() => setShowProfile((prev) => !prev)}
									to="/dashboard"
									className={classes["auth__button"]}
								>
									Settings
								</Link>
								<button
									onClick={handleLogout}
									className={classes["auth__button"]}
								>
									Logout
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Auth;
