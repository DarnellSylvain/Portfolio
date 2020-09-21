import React, { useState } from "react";
const CategoryContext = React.createContext();

function CategoryContextProvider({ children }) {
	const [category, setCategory] = useState("");
	const [projects, setProjects] = useState([
		{ id: 1, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
		{
			id: 2,
			name: "Random Quote Machine",
			img: "./images/RandomQuoteV2.JPG",
			type: "React",
		},
		{
			id: 3,
			name: "Weather App",
			img: "./images/WeatherAppV3.JPG",
			type: "React",
		},
		{
			id: 4,
			name: "Exchange App",
			img: "./images/ExchangeAppV3.JPG",
			type: "React",
		},
		{
			id: 5,
			name: "Super Camp",
			img: "./images/supercamp.png",
			type: "Node",
		},
		{
			id: 6,
			name: "Counter App",
			img: "./images/CounterApp.JPG",
			type: "Web App",
		},
		{
			id: 7,
			name: "Maynooth Furniture",
			img: "./images/maynooth.png",
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
