import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { CategoryContextProvider } from "./Context/CategoryContext";
import { PopupContextProvider } from "./Context/PopupContext";

import { ThemeContextProvider } from "./Context/ThemeContext";

ReactDOM.render(
	<PopupContextProvider>
		<ThemeContextProvider>
			<CategoryContextProvider>
				<App />
			</CategoryContextProvider>
		</ThemeContextProvider>
	</PopupContextProvider>,
	document.getElementById("root")
);
