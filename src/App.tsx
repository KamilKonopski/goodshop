import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./pages/HomePage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import SignupPage from "./pages/SignupPage";

import store from "./store";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route index={true} element={<HomePage />} />
						<Route path="sign-up" element={<SignupPage />} />
						<Route path="register" element={<RegisterPage />} />
						<Route path="category/:id" element={<ProductCategoryPage />} />
						<Route path="product/:id" element={<ProductDetailsPage />} />
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
