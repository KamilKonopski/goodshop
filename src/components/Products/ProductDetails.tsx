import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLeft, AiOutlineRight, AiFillHeart } from "react-icons/ai";

import Quantity from "../UI/Quantity/Quantity";

import useDocumentTitle from "../../hooks/useDocumentTitle";

import { IProducts } from "src/interfaces/products";

import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import { RootState } from "../../store";

import classes from "./ProductDetails.module.scss";

const ProductDetails = ({ product }: { product: IProducts }) => {
	const [mainImage, setMainImage] = useState<number>(0);
	const [quantity, setQuantity] = useState<number>(1);
	const dispatch = useDispatch();
	const favourite = useSelector(
		(state: RootState) => state.ui.favouriteProducts
	);

	const isFavourite = favourite.some((fav) => fav.id === product.id);

	useDocumentTitle(` - ${product.title}`);

	const handlePreviousImage = () => {
		if (mainImage === 0) {
			setMainImage(product.images.length - 1);
		} else {
			setMainImage((prev) => prev - 1);
		}
	};

	const handleNextImage = () => {
		if (mainImage === product.images.length - 1) {
			setMainImage(0);
		} else {
			setMainImage((prev) => prev + 1);
		}
	};

	const handleAddToFavourite = () => {
		if (!isFavourite) {
			dispatch(uiActions.addToFavourite(product));
		} else {
			dispatch(uiActions.removeFromFavourite(product.id));
		}
	};

	const handleAddToCart = () => {
		dispatch(cartActions.addItemtoCart({ product, quantity }));
	};

	return (
		<section className={classes.details}>
			<div className={classes["details__images"]}>
				<div className={classes["details__main-image"]}>
					<img src={product.images[mainImage]} alt={product.title} />
				</div>
				<div className={classes["details__other-images"]}>
					<button
						className={classes["details__btn-image"]}
						onClick={handlePreviousImage}
					>
						<AiOutlineLeft color="#a5a8ad" />
					</button>
					{product.images.map((image, index) => (
						<button
							className={classes["details__other-image"]}
							key={index}
							onClick={() => setMainImage(index)}
						>
							<img src={image} alt="" />
						</button>
					))}
					<button
						className={classes["details__btn-image"]}
						onClick={handleNextImage}
					>
						<AiOutlineRight color="#a5a8ad" />
					</button>
				</div>
			</div>
			<div className={classes["details__info"]}>
				<div className={classes["details__heading"]}>
					<h2 className={classes["details__heading-text"]}>{product.title}</h2>
					<span className={classes["details__links"]}>
						<Link className={classes["details__links-item"]} to="/">
							products
						</Link>
						/
						<Link
							className={classes["details__links-item"]}
							to={`/category/${product.category}`}
						>
							{product.category}
						</Link>
						/{product.brand}/{product.title}
					</span>
				</div>
				<div className={classes["details__price"]}>
					<Quantity
						quantity={quantity}
						stock={product.stock}
						onQuantity={setQuantity}
					/>
					<span className={classes["details__price-text"]}>
						${product.price}
					</span>
				</div>

				<div className={classes["details__favourite"]}>
					<AiFillHeart
						cursor="pointer"
						size={25}
						style={{ transition: "color 0.2s linear" }}
						color={isFavourite ? "#f00" : "#fff"}
						onClick={handleAddToFavourite}
					/>
					<span className={classes["details__favourite-text"]}>
						Add to favourite
					</span>
				</div>
				<div className={classes["details__add"]}>
					<button
						className={classes["details__add-btn"]}
						onClick={handleAddToCart}
					>
						Add to cart
					</button>
				</div>
			</div>
			<div className={classes["details__desc"]}>
				<p className={classes["details__desc-text"]}>{product.description}</p>
			</div>
		</section>
	);
};

export default ProductDetails;
