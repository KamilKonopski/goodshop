import React, { Dispatch, SetStateAction } from "react";

import classes from "./Quantity.module.scss";

const Quantity = ({
	onQuantity,
	quantity,
	stock,
}: {
	onQuantity: Dispatch<SetStateAction<number>>;
	quantity: number;
	stock: number;
}) => {
	return (
		<div className={classes.quantity}>
			<button
				className={classes["quantity__btn"]}
				disabled={quantity <= 1}
				onClick={() => onQuantity((prev) => prev - 1)}
			>
				-
			</button>
			<span className={classes["quantity__text"]}>{quantity}</span>
			<button
				className={classes["quantity__btn"]}
				disabled={quantity >= stock}
				onClick={() => onQuantity((prev) => prev + 1)}
			>
				+
			</button>
		</div>
	);
};

export default Quantity;
