import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailts from "../components/Products/ProductDetails";

import { IProducts } from "src/interfaces/products";

import useDocumentTitle from "../hooks/useDocumentTitle";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const ProductDetailsPage: React.FC = () => {
	const [product, setProduct] = useState<IProducts | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { id } = useParams();

	useDocumentTitle(`- ${product && product.title}`);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			try {
				const data: IProducts = await response.json();

				setProduct(data);
			} catch (err) {
				//
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [id]);

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{product && !isLoading && <ProductDetailts product={product} />}
		</>
	);
};

export default ProductDetailsPage;
