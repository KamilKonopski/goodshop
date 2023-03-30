import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

import { IProducts } from "src/interfaces/products";

import classes from "./Products.module.scss";

interface IProps {
	products: IProducts[];
	hasMore?: boolean;
	ref: HTMLDivElement;
}

const Products = forwardRef<HTMLDivElement, IProps>((props, ref) => (
	<section className={classes.products}>
		<h2 className={classes["products__found"]}>
			{props.products.length} product found
		</h2>
		{props.products.map((product) => (
			<Link key={product.id} to={`/product/${product.id}`}>
				<div className={classes.product}>
					<div className={classes["product__image-container"]}>
						<img
							className={classes["product__image"]}
							src={product.thumbnail}
							alt={product.title}
						/>
					</div>
					<span className={classes["product__title"]}>{product.title}</span>
					<div className={classes["product__brand-cat"]}>
						<span>{product.brand}</span>
						<span>{product.category}</span>
					</div>
					<span className={classes["product__price"]}>${product.price}</span>
				</div>
			</Link>
		))}
		{props.hasMore && <div ref={ref}>Loading more products...</div>}
	</section>
));

Products.displayName = "Products";

export default Products;
