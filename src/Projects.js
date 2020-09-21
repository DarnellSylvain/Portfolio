import React, { useContext } from "react";
import "./Projects.css";

import { CategoryContext } from "./Context/CategoryContext";

import { Element } from "react-scroll";

function Projects() {
	const { projects, category, toggleCategory } = useContext(CategoryContext);

	const projectDisplay = () => {
		if (category) {
			return projects
				.filter((item) => item.type === category)
				.map((project) => (
					<div key={project.id} className="project__card">
						<div className="project__cardText">
							<p>
								<small>{project.type}</small>
							</p>
							<h3>{project.name}</h3>
						</div>
						<img src={require(`${project.img}`)} alt="project"></img>
					</div>
				));
		} else {
			return projects.map((project) => (
				<div key={project.id} className="project__card">
					<div className="project__cardText">
						<p>
							<small>{project.type}</small>
						</p>
						<h3>{project.name}</h3>
					</div>
					<img src={require(`${project.img}`)} alt="project"></img>
				</div>
			));
		}
	};

	console.log(category);

	return (
		<Element className="project__container" id="projects">
			<div className="h2__header">
				<div className="header__line"></div>
				<h2>Projects</h2>
			</div>
			<ul className="project__categories">
				<li onClick={() => toggleCategory("")}>All Categories</li>
				<li onClick={() => toggleCategory("Web Design")}>Web Design</li>
				<li onClick={() => toggleCategory("React")}>React</li>
				<li onClick={() => toggleCategory("Node")}>Node</li>
				<li onClick={() => toggleCategory("Web App")}>Web App</li>
			</ul>

			<div className="project__cards">{projectDisplay()}</div>
		</Element>
	);
}

export default Projects;
