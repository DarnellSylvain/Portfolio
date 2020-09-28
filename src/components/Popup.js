import React, { useContext } from "react";
import { PopupContext } from "../Context/PopupContext";

import ImgWithFallback from "./ImgWithFallBack";

import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Popup = ({ project }) => {
	const { popup, togglePopup } = useContext(PopupContext);

	return popup ? (
		<div className={popup ? "popup__container showPopup" : "popup__container "}>
			<div className="popup__content__container">
				<div className="popup__content">
					<div className="popup__info">
						<h2>{project.name}</h2>
						<p>{project.description}</p>
						<p>Created using React</p>
						<ul className="tech__list">
							{project.technologies
								? project.technologies.map((tech) => <li key={tech}>{tech}</li>)
								: ""}
						</ul>

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
										<FaExternalLinkAlt
											size={32}
											style={{ color: "var(--backgroundcolor" }}
										/>
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
								<FaGithub
									size={32}
									style={{ color: "var(--backgroundcolor" }}
								/>
							</a>
							<p>Github</p>
						</div>
					</div>
					<div className="popup__image">
						{project.projectphotoIMG.map((img) => (
							<React.Fragment key={img.webp}>
								<ImgWithFallback
									src={img.webp}
									fallback={img.jpg}
									alt={`A screenshot of the ${project.name} project`}
								/>
								<br />
								<br />
								<p>{img.imgDesc}</p>
								<br />
								<br />
							</React.Fragment>
						))}
					</div>
				</div>
				<div
					className="exit__icon"
					onClick={() => {
						document.body.classList.remove("stopScroll");
						togglePopup();
					}}
				>
					<FaTimes></FaTimes>
				</div>
			</div>
		</div>
	) : (
		""
	);
};
export default Popup;
