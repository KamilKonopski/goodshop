import React from "react";
import { Link } from "react-router-dom";

import Auth from "../Auth/Auth";
import MainNavigation from "../MainNavigation/MainNavigation";
import Cart from "../Cart/Cart";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes["header__logo"]}>
				<Link to="/">GoodShop</Link>
			</h1>
			<MainNavigation />
			<Cart />
			<Auth />
		</header>
	);
};

export default Header;
