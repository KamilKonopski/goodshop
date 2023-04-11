import React from "react";
import { Link } from "react-router-dom";

import classes from "./PageNotFound.module.scss";

const PageNotFound: React.FC = () => {
	return (
		<section className={classes["error-page"]}>
			<h2 className={classes["error-page__number"]}>404</h2>
			<p className={classes["error-page__text"]}>Ooops, page not found</p>
			<Link className={classes["error-page__link"]} to="/">
				Go Home
			</Link>
		</section>
	);
};

export default PageNotFound;
