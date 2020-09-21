import React, { useContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Header from "./components/Header";
import Showcase from "./Showcase";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./components/Footer";
import SideInfo from "./components/SideInfo";

import { ThemeContext } from "./Context/ThemeContext";

function App() {
	const { theme } = useContext(ThemeContext);

	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<Router>
			<Header
				theme={theme}
				isDarkMode={isDarkMode}
				setIsDarkMode={setIsDarkMode}
			/>
			<div className={`container__container ${theme}`}>
				<div className="container ">
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
