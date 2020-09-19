import React, { useContext } from "react";
import "./App.css";
import { Element } from "react-scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Header from "./components/Header";
import Showcase from "./Showcase";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./components/Footer";

import linkedinIMG from "./images/linkedin@2x.png";
import twitterIMG from "./images/twitter@2x.png";
import githubIMG from "./images/github@2x.png";
import instagramIMG from "./images/instagram@2x.png";
import SideInfo from "./components/SideInfo";

import { ThemeContext } from "./Context/ThemeContext";

function App() {
	const { theme } = useContext(ThemeContext);
	console.log(theme);
	return (
		<Router className="App">
			<Header />
			<div className="container__container">
				<div className="container">
					<SideInfo />
					<Showcase />
					<Fade bottom>
						<About />
						<Skills />
						<Projects />
						<Education />
						<Contact />
					</Fade>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
