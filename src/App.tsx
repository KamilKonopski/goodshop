import React from "react";
import { Provider } from "react-redux";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./pages/HomePage";
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
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
