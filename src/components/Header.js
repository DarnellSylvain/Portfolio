import React, { useState } from "react";
import "./Header.css";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";

import linkedinIMG from "../images/linkedin@2x.png";
import twitterIMG from "../images/twitter@2x.png";
import githubIMG from "../images/github@2x.png";
import instagramIMG from "../images/instagram@2x.png";

const Header = () => {
	const ScrollLink = Scroll.Link;
	const [menuSelected, setMenuSelected] = useState(false);
	const [menuShow, setMenuShow] = useState(false);
	return (
		<div className="header">
			<ul className={menuSelected ? "header__nav show" : "header__nav"}>
				<li>
					<ScrollLink
						to="about"
						spy={true}
						smooth={true}
						duration={500}
						offset={-92}
						id="link"
					>
						About
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to="skills"
						spy={true}
						smooth={true}
						duration={500}
						offset={-92}
						id="link"
					>
						Skills
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to="projects"
						spy={true}
						smooth={true}
						duration={500}
						offset={-92}
						id="link"
					>
						Projects
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to="education"
						spy={true}
						smooth={true}
						duration={500}
						offset={-92}
						id="link"
					>
						Education
					</ScrollLink>
				</li>
				<li>
					<ScrollLink
						to="contact"
						spy={true}
						smooth={true}
						duration={500}
						offset={-300}
						id="link"
					>
						Contact
					</ScrollLink>
				</li>
				<ul className="header__socials">
					<li>
						<a
							href="https://www.linkedin.com/in/darnell-sylvain-85987b166"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={linkedinIMG} alt="map marker icon"></img>
						</a>
					</li>

					<li>
						<a
							href="https://www.twitter.com/stillvain_"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={twitterIMG} alt="map marker icon"></img>
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/darnellsylvain"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={instagramIMG} alt="map marker icon"></img>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/darnellsylvain"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={githubIMG} alt="map marker icon"></img>
						</a>
					</li>
				</ul>
			</ul>

			<div
				className={menuSelected ? "navbar-btn open" : "navbar-btn"}
				onClick={() => setMenuSelected((prevState) => !prevState)}
			>
				<div className="navbar-btn_burger"></div>
			</div>
		</div>
	);
};

export default Header;
