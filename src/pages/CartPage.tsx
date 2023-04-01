import React from "react";

import useDocumentTitle from "../hooks/useDocumentTitle";

const CartPage: React.FC = () => {
	useDocumentTitle("- cart");

	return <div>CartPage</div>;
};

export default CartPage;
