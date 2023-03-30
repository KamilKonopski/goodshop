import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Products from "../components/Products/Products";

import { IProducts } from "src/interfaces/products";
import ContentFilters from "../components/ContentFilters/ContentFilters";

const ProductCategoryPage: React.FC = () => {
	const [products, setProducts] = useState<IProducts[] | []>([]);
	const { category } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://dummyjson.com/products/category/${category}`
			);
			try {
				const { products }: { products: IProducts[] } = await response.json();
				setProducts(products);
			} catch (err) {
				//
			}
		};

		fetchData();
	}, [category]);

	return (
		<main className="main">
			<ContentFilters />
			<Products products={products} />
		</main>
	);
};

export default ProductCategoryPage;
