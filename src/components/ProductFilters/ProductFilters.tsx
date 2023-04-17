import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import FilterFavourite from "./FilterFavourite";

import classes from "./ProductFilters.module.scss";

const ProductFilters: React.FC = () => {
	const [showFavourite, setShowFavourite] = useState<boolean>(false);

	return (
		<aside className={classes.filters}>
			<h2>Filter</h2>
			<div>
				<button onClick={() => setShowFavourite((prev) => !prev)}>
					<span>Favourite Searches</span>
					<RiArrowDropDownLine
						style={
							showFavourite
								? { transform: "rotate(0)", transition: "all 0.2s linear" }
								: { transform: "rotate(-90deg)", transition: "all 0.2s linear" }
						}
						size={20}
						color="#a5a8ad"
					/>
				</button>
				{showFavourite && <FilterFavourite />}
			</div>
		</aside>
	);
};

export default ProductFilters;
