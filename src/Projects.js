import React from "react";
import "./Projects.css";

import { Element } from "react-scroll";

import projectIMG from "./images/project@2x.jpg";
import weatherAPP1 from "./images/WeatherApp.JPG";
import weatherAPP2 from "./images/WeatherAppV2.JPG";
import weatherAPP3 from "./images/WeatherAppV3.JPG";

function Projects() {
	const projects = [
		{ id: 1, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
		{ id: 2, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
		{ id: 3, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
		{ id: 4, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
		{ id: 5, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
		{ id: 6, name: "Portfolio", img: "./images/project@2x.jpg", type: "React" },
	];

	return (
		<Element className="project__container" id="projects">
			<div className="h2__header">
				<div className="header__line"></div>
				<h2>Projects</h2>
			</div>
			<ul className="project__categories">
				<li>All Categories</li>
				<li>Web Design</li>
				<li>React</li>
				<li>Node</li>
				<li>Web App</li>
			</ul>

			<div className="project__cards">
				{projects.map((project) => (
					<div key={project.id} className="project__card">
						<div className="project__cardText">
							<p>
								<small>React</small>
							</p>
							<h3>{projects[0].name}</h3>
						</div>
						<img src={projectIMG} alt="project"></img>
					</div>
				))}

				{/* <div className="project__card">
					<img src={projectIMG} alt="project"></img>
				</div>
				<div className="project__card">
					<img src={projectIMG} alt="project"></img>
				</div>
				<div className="project__card">
					<img src={weatherAPP1} alt="project"></img>
				</div>
				<div className="project__card">
					<img src={weatherAPP2} alt="project"></img>
				</div>
				<div className="project__card">
					<img src={weatherAPP3} alt="project"></img>
				</div> */}
			</div>
		</Element>
	);
}

export default Projects;
