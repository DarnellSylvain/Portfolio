import React, { useContext } from "react";
import { PopupContext } from "../Context/PopupContext";
import ImgWithFallback from "./ImgWithFallBack";

const Popup = ({ project }) => {
	const { popup, togglePopup } = useContext(PopupContext);

	const techList = () => {
		if (project.technologies) {
			return project.technologies.map((tech) => <li key={tech}>{tech}</li>);
		}
	};

	const popupDisplay = () => {
		if (popup) {
			return (
				<div
					className={popup ? "popup__container showPopup" : "popup__container "}
				>
					<div className="popup__content__container">
						<div className="popup__content">
							<div className="popup__info">
								<h2>{project.name}</h2>
								<p>{project.description}</p>
								<p>Created using React</p>
								<ul className="tech__list">{techList()}</ul>

								<div className="btn__container">
									{project.liveURL ? (
										<>
											<a
												href={project.liveURL}
												rel="noopener noreferrer"
												target="_blank"
												className="btn"
												title="Link to Live Demo"
											>
												<i className="fas fa-external-link-alt fa-2x"></i>
											</a>
											<p>Live View</p>
										</>
									) : null}

									<a
										href={project.githubURL}
										rel="noopener noreferrer"
										target="_blank"
										className="btn"
										title="Link to Github"
									>
										<i className="fab fa-github fa-2x"></i>
									</a>
									<p>Github</p>
								</div>
							</div>
							<div className="popup__image">
								{/* <ImgWithFallback
									// src={require(`.${project.img}.webp`)}
									fallback={require(`.${project.img}.jpg`)}
									alt={`A screenshot of the ${project.name} project`}
								/> */}
								<img
									src={require("../images/selfie.jpg")}
									alt={`A screenshot of the ${project.name} project`}
								></img>
							</div>
						</div>
						<div
							className="exit__icon"
							onClick={() => {
								document.body.classList.toggle("stopScroll");
								togglePopup();
							}}
						>
							<i className="fas fa-times fa-lg"></i>
						</div>
					</div>
				</div>
			);
		} else {
			return <div>Not loaded</div>;
		}
	};

	return popupDisplay();
};

export default Popup;
