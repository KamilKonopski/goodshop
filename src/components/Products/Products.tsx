import React, { useEffect, useRef, useState } from "react";

import { IProducts } from "src/interfaces/products";

import classes from "./Products.module.scss";

const Products: React.FC = () => {
	const [products, setProducts] = useState<IProducts[] | []>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [page, setPage] = useState<number>(0);
	const elementRef = useRef<HTMLDivElement>(null);

	const onIntersection = (entries: IntersectionObserverEntry[]) => {
		const firstEntry = entries[0];
		if (firstEntry.isIntersecting && hasMore) {
			fetchMoreProducts();
		}
	};

	const fetchMoreProducts = async () => {
		const response = await fetch(
			`https://dummyjson.com/products?limit=16&skip=${page * 16}`
		);
		const { products }: { products: IProducts[] } = await response.json();

		if (products.length === 0) {
			setHasMore(false);
		} else {
			setProducts((prev) => [...prev, ...products]);
			setPage((prev) => prev + 1);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(onIntersection);
		if (observer && elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, [products]);

	return (
		<section className={classes.products}>
			<h2 className={classes["products__found"]}>
				{products.length} product found
			</h2>
			{products.map((product) => (
				<div key={product.id} className={classes.product}>
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
			))}
			{hasMore && <div ref={elementRef}>Loading more products...</div>}
		</section>
	);
};

export default Products;
