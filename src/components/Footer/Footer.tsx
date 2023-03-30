import React from "react";

import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
	return (
		<footer className={classes.footer}>
			<span className={classes["footer__text"]}>
				Copyright 2023, Kamil Konopski
			</span>
		</footer>
	);
};

export default Footer;
