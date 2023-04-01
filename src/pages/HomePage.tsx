import React, { useEffect, useRef, useState } from "react";

import ContentFilters from "../components/ContentFilters/ContentFilters";
import Products from "../components/Products/Products";

import { IProducts } from "src/interfaces/products";

import useDocumentTitle from "../hooks/useDocumentTitle";

const HomePage: React.FC = () => {
	const [products, setProducts] = useState<IProducts[] | []>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [page, setPage] = useState<number>(0);
	const elementRef = useRef<HTMLDivElement>(null);

	useDocumentTitle("");

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
		<main className="main">
			<ContentFilters />
			<Products products={products} hasMore={hasMore} ref={elementRef} />
		</main>
	);
};

export default HomePage;
