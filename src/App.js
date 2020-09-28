import React, { useContext, useState, Suspense } from "react";
import "./App.css";
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
import Popup from "./components/Popup";
import ProjectData from "./Data/ProjectData";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
	const { theme } = useContext(ThemeContext);

	const [selectedProject, setSelectedProject] = useState({});

	const setProjectModal = (id) => {
		const Project = ProjectData.filter((project) => project.id === id);
		setSelectedProject(...Project);
	};

	return (
		<Suspense fallback={<p>Loading</p>}>
			<Header />
			<div className={`container__container ${theme}`}>
				<div className="container ">
					<SideInfo />
					<Showcase />
					<Fade bottom>
						<About />
						<Skills />

						<Projects setProjectModal={setProjectModal} />

						<Education />
						<Contact />
					</Fade>
					<Footer />

					<Popup project={selectedProject} />
				</div>
			</div>
		</Suspense>
	);
}

export default App;
