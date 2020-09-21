import React from "react";
import "./About.css";
import { Element } from "react-scroll";

import selfIMG from "./images/selfie.jpg";

function About() {
	return (
		<Element className="about__container" id="about">
			<div className="h2__header">
				<div className="header__line"></div>
				<h2>About</h2>
			</div>
			<div className="about__content">
				<div className="image__container">
					<div className="about__image">
						<img src={selfIMG} alt="myself"></img>
					</div>
				</div>

				<div className="about__info">
					<p>
						Hello I'm Darnell, a web developer based in London, UK.
						<br />
						<br /> I enjoy bringing ideas to life on the internet, whether it be
						other people's ideas or my own, through creation of websites and
						applications.
						<br />
						<br />
						After obtaining a bachelors degree in Mechanical Engineering, I
						turned my attention to trying to learn a new skill which led me to
						coding. I soon fell in love with coding, recognising it's ability to
						allow people to innovate, share, solve problems and communicate.
						<br />
						<br />
						Other than programming, I love gaming, watching football and reading
						books.
					</p>
					<button>
						<a href="/">Download CV</a>
					</button>
				</div>
			</div>
		</Element>
	);
}

export default About;
