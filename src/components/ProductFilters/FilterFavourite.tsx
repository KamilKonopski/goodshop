import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../store";

import classes from "./FilterFavourite.module.scss";

const FilterFavourite: React.FC = () => {
	const favProducts = useSelector(
		(state: RootState) => state.ui.favouriteProducts
	);

	return (
		<ul className={classes.favourite}>
			{favProducts.map((fav) => (
				<li key={fav.id}>
					<Link
						className={classes["favourite__link"]}
						to={`/product/${fav.id}`}
					>
						- {fav.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FilterFavourite;
