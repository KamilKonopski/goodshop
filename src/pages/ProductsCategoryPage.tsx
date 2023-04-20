import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Products from "../components/Products/Products";
import ProductFilters from "../components/ProductFilters/ProductFilters";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

import { IProducts } from "src/interfaces/products";

import useDocumentTitle from "../hooks/useDocumentTitle";

type ProductResponse = {
	products: IProducts[];
};

const ProductCategoryPage: React.FC = () => {
	const [products, setProducts] = useState<IProducts[] | []>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { category } = useParams();

	useDocumentTitle(`- ${category}`);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const { data } = await axios.get<ProductResponse>(
				`https://dummyjson.com/products/category/${category}`
			);
			try {
				const { products } = data;
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
			<ProductFilters />
			{isLoading && <LoadingSpinner />}
			{!isLoading && <Products products={products} />}
		</main>
	);
};

export default ProductCategoryPage;
