import React, { useState } from "react";

import ProjectData from "../Data/ProjectData";

const CategoryContext = React.createContext();

function CategoryContextProvider({ children }) {
	const [category, setCategory] = useState("");
	const [projects, setProjects] = useState(ProjectData);

	const toggleCategory = (categories) => {
		setCategory(categories);
	};

	return (
		<CategoryContext.Provider
			value={{ category, toggleCategory, projects, setProjects }}
		>
			{children}
		</CategoryContext.Provider>
	);
}

export { CategoryContextProvider, CategoryContext };
