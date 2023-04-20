import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import ProductFilters from "../components/ProductFilters/ProductFilters";
import Products from "../components/Products/Products";

import { IProducts } from "src/interfaces/products";

import useDocumentTitle from "../hooks/useDocumentTitle";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

type ProductResponse = {
	products: IProducts[];
};

const HomePage: React.FC = () => {
	const [products, setProducts] = useState<IProducts[] | []>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(false);
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
		setIsLoading(true);
		const { data } = await axios.get<ProductResponse>(
			`https://dummyjson.com/products?limit=16&skip=${page * 16}`
		);
		const { products } = data;

		if (products.length === 0) {
			setHasMore(false);
		} else {
			setProducts((prev) => [...prev, ...products]);
			setPage((prev) => prev + 1);
		}
		setIsLoading(false);
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
			<ProductFilters />
			{isLoading && <LoadingSpinner />}
			{!isLoading && (
				<Products products={products} hasMore={hasMore} ref={elementRef} />
			)}
		</main>
	);
};

export default HomePage;
