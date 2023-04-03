import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailts from "../components/Products/ProductDetails";

import { IProducts } from "src/interfaces/products";

import useDocumentTitle from "../hooks/useDocumentTitle";

const ProductDetailsPage: React.FC = () => {
	const [product, setProduct] = useState<IProducts | null>(null);
	const { id } = useParams();

	useDocumentTitle(`- ${product && product.title}`);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			try {
				const data: IProducts = await response.json();

				setProduct(data);
			} catch (err) {
				//
			}
		};

		fetchData();
	}, [id]);

	return <>{product && <ProductDetailts product={product} />}</>;
};

export default ProductDetailsPage;
