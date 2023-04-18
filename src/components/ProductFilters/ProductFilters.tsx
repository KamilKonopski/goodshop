import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import FilterFavourite from "./FilterFavourite";

import classes from "./ProductFilters.module.scss";

const ProductFilters: React.FC = () => {
	const [showFavourite, setShowFavourite] = useState<boolean>(false);

	return (
		<aside className={classes.filters}>
			<h2 className={classes["filters__heading"]}>Filter</h2>
			<button
				className={classes["filters__favourite-btn"]}
				onClick={() => setShowFavourite((prev) => !prev)}
			>
				<span className={classes["filters__favourite-text"]}>
					Favourite Searches
				</span>
				<RiArrowDropDownLine
					style={
						showFavourite
							? { transform: "rotate(0)", transition: "all 0.2s linear" }
							: { transform: "rotate(-90deg)", transition: "all 0.2s linear" }
					}
					size={30}
					color="#a5a8ad"
				/>
			</button>
			{showFavourite && <FilterFavourite />}
		</aside>
	);
};

export default ProductFilters;
