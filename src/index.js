import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { CategoryContextProvider } from "./Context/CategoryContext";

import { ThemeContextProvider } from "./Context/ThemeContext";

ReactDOM.render(
	<ThemeContextProvider>
		<CategoryContextProvider>
			<App />
		</CategoryContextProvider>
	</ThemeContextProvider>,
	document.getElementById("root")
);
