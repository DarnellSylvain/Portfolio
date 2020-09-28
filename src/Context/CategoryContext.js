import React, { useState } from "react";

import ProjectData from "../Data/ProjectData";

const CategoryContext = React.createContext();

function CategoryContextProvider({ children }) {
	const [category, setCategory] = useState("");
	const [projects] = useState(ProjectData);

	const toggleCategory = (categories) => {
		setCategory(categories);
	};

	return (
		<CategoryContext.Provider value={{ category, toggleCategory, projects }}>
			{children}
		</CategoryContext.Provider>
	);
}

export { CategoryContextProvider, CategoryContext };
