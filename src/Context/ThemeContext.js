import React, { useState } from "react";
const ThemeContext = React.createContext();

function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContextProvider, ThemeContext };
