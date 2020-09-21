import React, { useState } from "react";
const CategoryContext = React.createContext();

function CategoryContextProvider({ children }) {
	const [category, setCategory] = useState("");
	const [projects, setProjects] = useState([
		{ id: 1, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
		{
			id: 2,
			name: "Random Quote Machine",
			img: "./images/RandomQuoteV3.jpg",
			type: "React",
		},
		{
			id: 3,
			name: "Weather App",
			img: "./images/WeatherAppV4.jpg",
			type: "React",
		},
		{
			id: 4,
			name: "Exchange App",
			img: "./images/ExchangeAppv4.jpg",
			type: "React",
		},
		{
			id: 5,
			name: "Super Camp",
			img: "./images/supercampv2.jpg",
			type: "Node",
		},
		{
			id: 6,
			name: "Counter App",
			img: "./images/CounterAppV4.jpg",
			type: "Web App",
		},
		{
			id: 7,
			name: "Maynooth Furniture",
			img: "./images/maynoothv2.jpg",
			type: "Web Design",
		},
	]);

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
