import React from "react";
import { useSelector } from "react-redux";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./pages/HomePage";
import ProductsCategoryPage from "./pages/ProductsCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import DashboardPage from "./pages/DashboardPage";

import { RootState } from "./store";

const App: React.FC = () => {
	const user = useSelector((state: RootState) => state.auth.user);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index={true} element={<HomePage />} />
					<Route
						path="login"
						element={!user?.token ? <LoginPage /> : <Navigate to={"/"} />}
					/>
					<Route path="category/:category" element={<ProductsCategoryPage />} />
					<Route path="product/:id" element={<ProductDetailsPage />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
