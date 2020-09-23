import React, { useContext } from "react";
import "./Projects.css";

import { CategoryContext } from "./Context/CategoryContext";
import { PopupContext } from "./Context/PopupContext";

import { Element } from "react-scroll";

function Projects({ setProjectModal }) {
	const { projects, category, toggleCategory } = useContext(CategoryContext);
	const { togglePopup } = useContext(PopupContext);

	const handleModal = (event) => {
		setProjectModal(event.currentTarget.id);
	};

	const projectDisplay = () => {
		if (category) {
			return projects
				.filter((item) => item.type.includes(category))
				.map((project) => (
					<div
						id={project.id}
						key={project.id}
						className="project__card"
						onClick={(e) => {
							document.body.classList.toggle("stopScroll");
							togglePopup();
							handleModal(e);
						}}
					>
						<div className="project__cardText">
							<p>
								<small>
									{" "}
									{project.type[1]
										? `${project.type[0]} & ${project.type[1]}`
										: project.type}
								</small>
							</p>
							<h3>{project.name}</h3>
						</div>
						<picture>
							{/* <source
								srcSet={require(`${project.img}.webp`)}
								type="image/webp"
							/> */}
							<source srcSet={require(`${project.img}.jpg`)} type="image/jpg" />
							<img src={require(`${project.img}.jpg`)} alt="myself"></img>
						</picture>
					</div>
				));
		} else {
			return projects.map((project) => (
				<div
					id={project.id}
					key={project.id}
					className="project__card"
					onClick={(e) => {
						togglePopup();
						document.body.classList.toggle("stopScroll");
						handleModal(e);
					}}
				>
					<div className="project__cardText">
						<p>
							<small>
								{project.type[1]
									? `${project.type[0]} & ${project.type[1]}`
									: project.type}
							</small>
						</p>
						<h3>{project.name}</h3>
					</div>
					<picture>
						{/* <source srcSet={require(`${project.img}.webp`)} type="image/webp" /> */}
						<source srcSet={require(`${project.img}.jpg`)} type="image/jpg" />
						<img src={require(`${project.img}.jpg`)} alt="myself"></img>
					</picture>
					{/* // <img src={require(`${project.img}`)} alt="project"></img> */}
				</div>
			));
		}
	};

	return (
		<Element className="project__container" id="projects">
			<div className="h2__header">
				<div className="header__line"></div>
				<h2>Projects</h2>
			</div>
			<ul className="project__categories">
				<li
					className={!category ? "selected" : null}
					onClick={() => toggleCategory("")}
				>
					All Categories
				</li>
				<li
					className={category === "Web Design" ? "selected" : null}
					onClick={() => toggleCategory("Web Design")}
				>
					Web Design
				</li>
				<li
					className={category === "React" ? "selected" : null}
					onClick={() => toggleCategory("React")}
				>
					React
				</li>
				<li
					className={category === "Node" ? "selected" : null}
					onClick={() => toggleCategory("Node")}
				>
					Node
				</li>
				<li
					className={category === "Web App" ? "selected" : null}
					onClick={() => toggleCategory("Web App")}
				>
					Web App
				</li>
			</ul>

			<div className="project__cards">{projectDisplay()}</div>
		</Element>
	);
}

export default Projects;
