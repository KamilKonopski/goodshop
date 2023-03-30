import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./pages/HomePage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

import store from "./store";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route index={true} element={<HomePage />} />
						<Route path="login" element={<LoginPage />} />
						<Route
							path="category/:category"
							element={<ProductsCategoryPage />}
						/>
						<Route path="product/:id" element={<ProductDetailsPage />} />
						<Route path="cart" element={<CartPage />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
