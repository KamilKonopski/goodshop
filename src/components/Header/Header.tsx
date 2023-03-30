import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

import Auth from "../Auth/Auth";
import MainNavigation from "../MainNavigation/MainNavigation";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes["header__logo"]}>
				<Link to="/">GoodShop</Link>
			</h1>

			<MainNavigation />
			<div className={classes["header__cart"]}>
				<Link to="/cart">
					<TiShoppingCart size={30} color="#fff" />
				</Link>
				<span>0</span>
			</div>
			<Auth />
		</header>
	);
};

export default Header;
