import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Products from "../components/Products/Products";

import { IProducts } from "src/interfaces/products";
import ContentFilters from "../components/ContentFilters/ContentFilters";

import useDocumentTitle from "../hooks/useDocumentTitle";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const ProductCategoryPage: React.FC = () => {
	const [products, setProducts] = useState<IProducts[] | []>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { category } = useParams();

	useDocumentTitle(`- ${category}`);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products/category/${category}`
			);
			try {
				const { products }: { products: IProducts[] } = await response.json();
				setProducts(products);
			} catch (err) {
				//
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [category]);

	return (
		<main className="main">
			<ContentFilters />
			{isLoading && <LoadingSpinner />}
			{!isLoading && <Products products={products} />}
		</main>
	);
};

export default ProductCategoryPage;
