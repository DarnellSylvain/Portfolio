import React, { useState } from "react";
import "./Skills.css";
import { Element } from "react-scroll";

import "react-slidedown/lib/slidedown.css";

import { SiAdobexd, SiMongodb, SiJavascript } from "react-icons/si";
import {
	FaPen,
	FaCode,
	FaServer,
	FaAngleDown,
	FaAngleUp,
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
} from "react-icons/fa";

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
						<FaPen className="i" size={22} />
					</span>

					<p>
						Designing good-looking, intuitive and user-friendly designs. Aiming
						to make every design responsive to fit on all screens. <br />
						<br />
					</p>

					<div className="span" onClick={(e) => setDesignTech(!designTech)}>
						<small>Technologies</small>

						{designTech ? (
							<FaAngleDown className="arrow" />
						) : (
							<FaAngleUp className="arrow" />
						)}
					</div>

					<ul
						className={
							designTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<SiAdobexd
								size={36}
								className="i"
								style={{ color: "#DA2286", height: "48px" }}
							/>
							Adobe Xd
						</li>
					</ul>
				</div>
				<div className="skill__card">
					<span>
						<h3>Front-End</h3>
						<FaCode size={27} className="i" />
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
							<FaAngleDown className="arrow" />
						) : (
							<FaAngleUp className="arrow" />
						)}
					</div>
					<ul
						className={
							frontEndTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<FaHtml5
								size={36}
								className="i"
								style={{
									color: "#E44D26",
									height: "48px",
								}}
							/>
							HTML
						</li>
						<li>
							<SiJavascript
								size={42}
								className="i"
								style={{ color: "#E4A126", height: "48px" }}
							/>
							Javascript
						</li>
						<li>
							<FaCss3Alt
								size={36}
								className="i"
								style={{ color: "#264DE4", height: "48px" }}
							/>
							CSS
						</li>
						<li>
							<FaReact
								size={48}
								className="i"
								style={{ color: "#53C1DE", height: "48px" }}
							/>
							React
						</li>
					</ul>
				</div>
				<div className="skill__card">
					<span>
						<h3>Back-End</h3>
						<FaServer size={22} className="i" />
					</span>

					<p>
						Building back-end servers to be paired with front-end applications,
						creating powerful API's, handling data, connecting to databases, and
						other back-end processes.
					</p>

					<div className="span" onClick={() => setBackEndTech(!backEndTech)}>
						<small>Technologies</small>
						{backEndTech ? (
							<FaAngleDown className="arrow" />
						) : (
							<FaAngleUp className="arrow" />
						)}
					</div>
					<ul
						className={
							backEndTech ? "technology__list noDisplay" : "technology__list"
						}
					>
						<li>
							<SiMongodb
								size={36}
								className="i"
								style={{ color: "#509646", height: "48px" }}
							/>{" "}
							MongoDB
						</li>
						<li>
							<FaNodeJs
								size={36}
								className="i"
								style={{ color: "#539E43", height: "48px" }}
							/>
							Node.JS
						</li>
					</ul>
				</div>
			</div>
		</Element>
	);
}

export default Skills;
