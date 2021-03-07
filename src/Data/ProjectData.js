// Date Model
// id - string/number ✔️
// name - string ✔️
// projectcardIMG - string ✔️
// projectphotoIMG - string
// technologies - list ✔️
// description - string✔️
// type = list  ✔️
// githubURL ✔️
// websiteURL✔️

const ProjectData = [
  // {
  // 	id: "2",
  // 	name: "Random Quote Machine",
  // 	projectcardIMG: "./images/RandomQuoteV3",
  // 	projectphotoIMG: [
  // 		{
  // 			webp: require("../images/RandomQuoteV3.webp"),
  // 			jpg: require("../images/RandomQuoteV3.jpg"),
  // 			imgDesc: "",
  // 		},
  // 	],
  // 	type: ["React"],
  // 	technologies: ["React", "Javascript", "CSS"],
  // 	githubURL: "https://github.com/DarnellSylvain/randomQuoteMachine",
  // 	liveURL: "",
  // 	description:
  // 		"The Random Quote Machine is an application that generates a random quote at the press of button. Each time a new quote is displayed, the theme colour also changes. This project was one of my first projects created and my first experience with API's",
  // },
  {
    id: "3",
    name: "Weather App",
    projectcardIMG: "./images/WeatherAppV4",
    projectphotoIMG: [
      {
        webp: require("../images/WeatherAppV4.webp"),
        jpg: require("../images/WeatherAppV4.jpg"),
        imgDesc: "",
      },
      {
        webp: require("../images/weatherapp.webp"),
        jpg: require("../images/weatherapp.jpg"),
        imgDesc: "",
      },
      // ADD PHOTO OF WHEN CITY IS SHOWN AND BACKGROUND HAS CHANGED
    ],
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
    projectcardIMG: "./images/ExchangeAppv4",
    projectphotoIMG: [
      {
        webp: require("../images/ExchangeAppv4.webp"),
        jpg: require("../images/ExchangeAppv4.jpg"),
        imgDesc: "",
      },
    ],
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
    projectcardIMG: "./images/supercampv2",
    projectphotoIMG: [
      {
        webp: require("../images/supercampv2.webp"),
        jpg: require("../images/supercampv2.jpg"),
        imgDesc: "Landing Page",
      },
      {
        webp: require("../images/supercampIndex.webp"),
        jpg: require("../images/supercampIndex.jpg"),
        imgDesc: "Index Page",
      },
      {
        webp: require("../images/supercampShow.webp"),
        jpg: require("../images/supercampShow.jpg"),
        imgDesc: "Individual post Page",
      },
    ],
    type: ["Node"],
    technologies: [
      "Node",
      "MongoDB",
      "Javascript",
      "EJS",
      "Passport",
      "Bootstrap",
    ],
    githubURL: "https://github.com/DarnellSylvain/SuperCamp",
    liveURL: "https://super-camp.herokuapp.com/",
    description:
      "This is my Web Development Bootcamp capstone project, completed by myself. Super Camp is a NodeJS project where people can sign up and post a character. They can include a name, an image, a description and their allegiance. Other users can then view the posts and make comments.",
  },
  // {
  // 	id: "6",
  // 	name: "Counter App",
  // 	projectcardIMG: "./images/CounterAppV4",
  // 	projectphotoIMG: [
  // 		{
  // 			webp: require("../images/CounterAppV4.webp"),
  // 			jpg: require("../images/CounterAppV4.jpg"),
  // 			imgDesc: "",
  // 		},
  // 	],
  // 	type: ["Web App"],
  // 	technologies: ["React", "Javascript", "HTML", "CSS"],
  // 	githubURL: "https://github.com/DarnellSylvain/counterReactProject",
  // 	liveURL: "",
  // 	description: "My first project using React. A simple counter application.",
  // },
  {
    id: "7",
    name: "Maynooth Furniture",
    projectcardIMG: "./images/maynoothv2",
    projectphotoIMG: [
      {
        webp: require("../images/maynoothIMGV1.webp"),
        jpg: require("../images/maynoothIMGV1.jpg"),
        imgDesc: "This is a picture of the home page",
      },
      {
        webp: require("../images/maynoothIMGV4.webp"),
        jpg: require("../images/maynoothIMGV4.jpg"),
        imgDesc: "This is a picture of the living room page",
      },
      {
        webp: require("../images/maynoothIMG3.webp"),
        jpg: require("../images/maynoothIMG3.jpg"),
        imgDesc: "Product page",
      },
    ],

    type: ["Web Design"],
    technologies: ["Web Design", "React"],
    githubURL: "https://github.com/DarnellSylvain/maynooth",
    liveURL: "https://maynoothfurniture.herokuapp.com/",
    description:
      "A website I designed as part of a UX/UI design course. Designed entirely by me, including colours, layout, theme, etc. This project is purely based on design and I took the extra step to code up the design using React.",
  },
];

export default ProjectData;
