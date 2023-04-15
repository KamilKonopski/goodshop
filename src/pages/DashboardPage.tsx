import React from "react";

import Settings from "../components/Settings/Settings";

import useDocumentTitle from "../hooks/useDocumentTitle";

const DashboardPage: React.FC = () => {
	useDocumentTitle("- dashboard");

	return <Settings />;
};

export default DashboardPage;
