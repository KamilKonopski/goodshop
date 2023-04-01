import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import classes from "./NavItem.module.scss";

interface IProps {
	name: string;
	categories: string[];
}

const NavItem: React.FC<IProps> = ({ name, categories }) => {
	const [showCategories, setShowCategories] = useState<boolean>(false);
	return (
		<div
			onMouseEnter={() => setShowCategories(true)}
			onMouseLeave={() => setShowCategories(false)}
			className={classes.item}
		>
			<span className={classes.text}>
				{name}
				<RiArrowDropDownLine
					style={
						showCategories
							? { transform: "rotate(180deg)", transition: "all 0.2s linear" }
							: { transform: "rotate(0)", transition: "all 0.2s linear" }
					}
					size={20}
					color="#a5a8ad"
				/>
			</span>
			{showCategories && (
				<ul className={classes.categories}>
					{categories.map((cat) => (
						<li className={classes.link} key={cat}>
							<NavLink to={`/category/${cat}`}>{cat}</NavLink>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavItem;
