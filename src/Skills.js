import React, { useState } from "react";
import "./Skills.css";
import { Element } from "react-scroll";

import "react-slidedown/lib/slidedown.css";
import mongoIMG from "./images/mongo@2x.png";

function Skills() {
	const [designTech, setDesignTech] = useState(true);
	const [frontEndTech, setFrontEndTech] = useState(true);
	const [backEndTech, setBackEndTech] = useState(true);

	return (
		<Element id="skills" className="skills__container">
			<div className="h2__header h2__left skill__header">
				<h2>Skills</h2>
				<div className="header__line"></div>
			</div>

			<div className="skill__cards">
				<div className="skill__card">
					<span>
						<h3>Design</h3>
						<i className="fas fa-pen fa-lg"></i>
					</span>

					<p>
						Designing good-looking, intuitive and user-friendly designs. Aiming
						to make every design responsive to fit on all screens. <br />
						<br />
					</p>

					<div className="span" onClick={(e) => setDesignTech(!designTech)}>
						<small>Technologies</small>

						{designTech ? (
							<i className="fas fa-angle-down"></i>
						) : (
							<i className="fas fa-angle-up"></i>
						)}
					</div>

					<ul
						className={
							designTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<i
								className="fab fa-adobe fa-3x"
								style={{ color: "#592B49" }}
							></i>
							Adobe Xd
						</li>
					</ul>
				</div>
				<div className="skill__card">
					<span>
						<h3>Front-End</h3>
						<i className="fas fa-code fa-lg"></i>
					</span>

					<p>
						Creating static and dynamic web applications, focusing on good user
						experiences and great performance. Preference using the React
						framework.
						<br />
						<br />
					</p>

					<div className="span" onClick={() => setFrontEndTech(!frontEndTech)}>
						<small>Technologies</small>
						{frontEndTech ? (
							<i className="fas fa-angle-down"></i>
						) : (
							<i className="fas fa-angle-up"></i>
						)}
					</div>
					<ul
						className={
							frontEndTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<i
								className="fab fa-html5 fa-3x"
								style={{ color: "#E44D26" }}
							></i>
							HTML
						</li>
						<li>
							<i
								className="fab fa-js-square fa-3x"
								style={{ color: "#E4A126" }}
							></i>{" "}
							Javascript
						</li>
						<li>
							<i
								className="fab fa-css3-alt fa-3x"
								style={{ color: "#264DE4" }}
							></i>{" "}
							CSS
						</li>
						<li>
							<i
								className="fab fa-react fa-3x"
								style={{ color: "#53C1DE" }}
							></i>{" "}
							React
						</li>
					</ul>
				</div>
				<div className="skill__card">
					<span>
						<h3>Back-End</h3>
						<i className="fas fa-server fa-lg"></i>
					</span>

					<p>
						Building back-end servers to be paired with front-end applications,
						creating powerful API's, handling data, connecting to databases, and
						other back-end processes.
					</p>

					<div className="span" onClick={() => setBackEndTech(!backEndTech)}>
						<small>Technologies</small>
						{backEndTech ? (
							<i className="fas fa-angle-down"></i>
						) : (
							<i className="fas fa-angle-up"></i>
						)}
					</div>
					<ul
						className={
							backEndTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<img src={mongoIMG} alt="mongo" /> MongoDB
						</li>
						<li>
							<i
								className="fab fa-node-js fa-3x"
								style={{ color: "#539E43" }}
							></i>{" "}
							Node.JS
						</li>
					</ul>
				</div>
			</div>
		</Element>
	);
}

export default Skills;
