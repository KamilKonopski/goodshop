import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { TiShoppingCart } from "react-icons/ti";

import { RootState } from "src/store";

import classes from "./Cart.module.scss";

const Cart: React.FC = () => {
	const totalQuantity = useSelector(
		(state: RootState) => state.cart.totalQuantity
	);

	return (
		<div className={classes.cart}>
			<Link to="/cart">
				<TiShoppingCart size={30} color="#fff" />
			</Link>
			<span className={classes["cart__number"]}>{totalQuantity}</span>
		</div>
	);
};

export default Cart;
