import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../store";

import classes from "./FavouriteProducts.module.scss";

const FavouriteProducts: React.FC = () => {
	const favProducts = useSelector(
		(state: RootState) => state.ui.favouriteProducts
	);

	return (
		<ul>
			{favProducts.map((fav) => (
				<li key={fav.id}>
					<Link to={`/product/${fav.id}`}>{fav.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default FavouriteProducts;
