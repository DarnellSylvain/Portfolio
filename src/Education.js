import React from "react";
import "./Education.css";

import { Element } from "react-scroll";

function Education() {
	return (
		<Element id="education" className="education__container">
			<div className="h2__header h2__left">
				<h2>Education</h2>
				<div className="header__line"></div>
			</div>

			<div className="education__content">
				<h3>Web Development Courses from online learning platforms</h3>
				<h3 style={{ color: "var(--featurecolor)" }}>2019 - </h3>
				<ul className="education__courses">
					<li>1. JavaScript Algorithms and Data Structures - FreeCodeCamp</li>
					<li>2. The React Bootcamp by Bob Ziroll - Scrimba</li>
					<li>
						3.{" "}
						<a
							href="https://ude.my/UC-2da03b04-2051-48b3-bbcc-bcfa9f91fe97"
							target="_blank"
							rel="noopener noreferrer"
						>
							The Web Developer Bootcamp
						</a>{" "}
						by Colt Steele - Udemy
					</li>
					<li>
						4. User Experience Design Essentials - Adobe XD UI UX Design by
						Daniel Walter Scott
					</li>
				</ul>
			</div>
		</Element>
	);
}

export default Education;
