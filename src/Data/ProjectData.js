// Date Model
// id - string/number ✔️
// name - string ✔️
// productcardIMG - string ✔️
// projectphotoIMG - string
// technologies - list ✔️
// description - string
// type = list  ✔️
// githubURL ✔️
// websiteURL✔️

const ProjectData = [
	{
		id: "2",
		name: "Random Quote Machine",
		productcardIMG: "./images/RandomQuoteV3",
		type: ["React"],
		technologies: ["React", "Javascript", "CSS"],
		githubURL: "https://github.com/DarnellSylvain/randomQuoteMachine",
		liveURL: "",
		description:
			"The Random Quote Machine is an application that generates a random quote at the press of button. Each time a new quote is displayed, the theme colour also changes. This project was one of my first projects created and my first experience with API's",
	},
	{
		id: "3",
		name: "Weather App",
		productcardIMG: "./images/WeatherAppV4",
		type: ["React"],
		technologies: ["React", "Javascript", "CSS"],
		githubURL: "https://github.com/DarnellSylvain/weatherApp",
		liveURL: "",
		description:
			"The Weather APP uses an API to gather weather information for cities around the world. If the temperature is above a certain degree the background changes to a warmer tone to reflect it. An early project",
	},
	{
		id: "4",
		name: "Exchange App",
		productcardIMG: "./images/ExchangeAppv4",
		type: ["React"],
		technologies: ["React", "Javascipt"],
		githubURL: "https://github.com/DarnellSylvain/exchangeApp",
		liveURL: "",
		description:
			"A simple App that uses `exchangerateapi` to convert currenies. An early project.",
	},
	{
		id: "5",
		name: "Super Camp",
		productcardIMG: "./images/supercampv2",
		type: ["Node", "React"],
		technologies: ["Node", "MongoDB", "Javascript", "EJS", "Passport"],
		githubURL: "https://github.com/DarnellSylvain/SuperCamp",
		liveURL: "https://super-camp.herokuapp.com/",
		description:
			"This is my Web Development Bootcamp capstone project, completed by myself. Super Camp is a NodeJS project where people can sign up and post a character. They can include a name, an image, a description and their alleigance. Other users can then view the posts and make comments.",
	},
	{
		id: "6",
		name: "Counter App",
		productcardIMG: "./images/CounterAppV4",
		type: ["Web App"],
		technologies: ["React", "Javascript", "HTML", "CSS"],
		githubURL: "https://github.com/DarnellSylvain/counterReactProject",
		liveURL: "",
		description: "My first project using React. A simple counter application.",
	},
	{
		id: "7",
		name: "Maynooth Furniture",
		productcardIMG: "./images/maynoothv2",
		type: ["Web Design"],
		technologies: ["Web Design", "React"],
		githubURL: "https://github.com/DarnellSylvain/maynooth",
		liveURL: "https://maynoothfurniture.herokuapp.com/",
		description:
			"A website I designed as part of a UX/UI design course. Designed entirely by me, including colours, layout, theme, etc. This project is purely based on design and I took the extra step to code up the design using React.",
	},
];

export default ProjectData;
