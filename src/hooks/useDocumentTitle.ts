import { useEffect } from "react";

function useDocumentTitle(title: string) {
	useEffect(() => {
		document.title = `GoodShop ${title}`;
	}, [title]);
}

export default useDocumentTitle;
