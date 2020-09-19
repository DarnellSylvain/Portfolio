import React, { useState } from "react";
import "./Skills.css";
import { Element } from "react-scroll";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

import penIMG from "./images/pen.png";
import serverIMG from "./images/server.png";
import codeIMG from "./images/code.png";
import arrowIMG from "./images/arrowdown@2x.png";

import adobexdIMG from "./images/adobexd@2x.png";
import cssIMG from "./images/css@2x.png";
import htmlIMG from "./images/html1.png";
import javascriptIMG from "./images/javascriptlogo@2x.png";
import reactIMG from "./images/react@2x.png";
import mongoIMG from "./images/mongo@2x.png";
import nodeIMG from "./images/node@2x.png";

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
						<img src={penIMG} alt="pen"></img>
					</span>

					<p>
						Designing good-looking, intuitive and user-friendly designs. Aiming
						to make every design responsive to fit on all screens. <br />
						<br />
					</p>

					<div className="span" onClick={(e) => setDesignTech(!designTech)}>
						<small>Technologies</small>
						<img src={arrowIMG} alt="arrow down"></img>
					</div>

					<ul
						className={
							designTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<img src={adobexdIMG} alt="adode xd" />
							Adobe Xd
						</li>
					</ul>
				</div>
				<div className="skill__card">
					<span>
						<h3>Front-End</h3>
						<img src={codeIMG} alt="code"></img>
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
						<img src={arrowIMG} alt="arrow down"></img>
					</div>
					<ul
						className={
							frontEndTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<img src={htmlIMG} alt="html" style={{ width: "38px" }} /> HTML
						</li>
						<li>
							<img src={javascriptIMG} alt="javascript" /> Javascript
						</li>
						<li>
							<img src={cssIMG} alt="css" /> CSS
						</li>
						<li>
							<img src={reactIMG} alt="react" style={{ width: "48px" }} /> React
						</li>
					</ul>
				</div>
				<div className="skill__card">
					<span>
						<h3>Back-End</h3>
						<img src={serverIMG} alt="pen"></img>
					</span>

					<p>
						Building back-end servers to be paired with front-end applications,
						creating powerful API's, handling data, connecting to databases, and
						other back-end processes.
					</p>

					<div className="span" onClick={() => setBackEndTech(!backEndTech)}>
						<small>Technologies</small>
						<img src={arrowIMG} alt="arrow down"></img>
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
							<img src={nodeIMG} alt="adode xd" /> Node.JS
						</li>
					</ul>
				</div>
			</div>
		</Element>
	);
}

export default Skills;
