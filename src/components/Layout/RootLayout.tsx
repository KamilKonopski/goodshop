import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import classes from "./RootLayout.module.scss";

const RootLayout: React.FC = () => {
	return (
		<div className={classes["root-container"]}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default RootLayout;
