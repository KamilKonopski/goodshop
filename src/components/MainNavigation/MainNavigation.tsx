import React from "react";

import NavItem from "./NavItem";

import classes from "./MainNavigation.module.scss";

const navigation = [
	{ name: "Electronics", categories: ["smartphones", "laptops", "automotive"] },
	{ name: "Cosmetics", categories: ["fragrances", "skincare"] },
	{
		name: "House",
		categories: ["groceries", "home-decoration", "furniture", "lighting"],
	},
	{
		name: "Fashions",
		categories: [
			"tops",
			"womens-dresses",
			"womens-shoes",
			"mens-shirts",
			"mens-shoes",
			"mens-watches",
			"womens-watches",
			"womens-bags",
			"womens-jewellery",
			"sunglasses",
		],
	},
	{ name: "Vehicles", categories: ["motorcycle"] },
];

const MainNavigation: React.FC = () => {
	return (
		<nav className={classes["main-navigation"]}>
			<ul className={classes["main-navigation__nav"]}>
				{navigation.map((nav) => (
					<NavItem key={nav.name} name={nav.name} categories={nav.categories} />
				))}
			</ul>
		</nav>
	);
};

export default MainNavigation;
