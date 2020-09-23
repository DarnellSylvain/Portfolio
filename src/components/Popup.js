import React, { useContext } from "react";
import { PopupContext } from "../Context/PopupContext";

const Popup = ({ project }) => {
	const { popup, togglePopup } = useContext(PopupContext);

	const techList = () => {
		if (project.technologies) {
			return project.technologies.map((tech) => <li key={tech}>{tech}</li>);
		}
	};

	return (
		<div className={popup ? "popup__container showPopup" : "popup__container "}>
			<div className="popup__content__container">
				<div className="popup__content">
					<div className="popup__info">
						<h2>{project.name}</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque assumenda quis iste, natus et fugit blanditiis nulla
							autem cumque fuga earum eum, sequi minima dolor dicta? Earum unde
							nostrum fuga ipsum. Architecto soluta blanditiis nemo porro magnam
							laudantium maiores eveniet, iure sequi veniam mollitia incidunt
							consectetur ullam nam rerum cum harum officia, vel optio
							accusantium facilis animi aspernatur aut. Suscipit
						</p>
						<p>Created using React</p>
						<ul className="tech__list">
							{techList()}
							{/* <li>Node</li>
							<li>Pug</li>
							<li>Mongo DB</li>
							<li>Javascript</li> */}
						</ul>

						<div className="btn__container">
							<a
								href="/"
								rel="noopener noreferrer"
								target="_blank"
								className="btn"
								title="Link to Live Demo"
							>
								<i className="fas fa-external-link-alt fa-2x"></i>
							</a>

							<a
								href="/"
								rel="noopener noreferrer"
								target="_blank"
								className="btn"
								title="Link to Github"
							>
								<i className="fab fa-github fa-2x"></i>
							</a>
						</div>
					</div>
					<div className="popup__image">
						<img src={require("../images/selfie.jpg")} alt="me"></img>
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
};

export default Popup;
