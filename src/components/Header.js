import React, { useState, useContext } from "react";
import "./Header.css";
import * as Scroll from "react-scroll";
import { ThemeContext } from "../Context/ThemeContext";

const Header = ({ isDarkMode, setIsDarkMode }) => {
	const { toggleTheme, theme } = useContext(ThemeContext);
	const ScrollLink = Scroll.Link;
	const [menuSelected, setMenuSelected] = useState(false);

	return (
		<div className={`header ${theme}`}>
			<div className="outer" onClick={() => toggleTheme()}>
				<i className="fas fa-sun" style={{ color: "#F9D71C" }}></i>
				<i className="fas fa-moon" style={{ color: "#D0D5D2" }}></i>
				<div className={theme === "dark" ? "ball" : "ball move"}></div>
			</div>
			<ul className={menuSelected ? "header__nav show" : "header__nav"}>
				<li>
					<ScrollLink
						to="about"
						spy={true}
						smooth={true}
						duration={500}
						offset={-92}
						id="link"
						onClick={() => setMenuSelected(false)}
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
						onClick={() => setMenuSelected(false)}
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
						onClick={() => setMenuSelected(false)}
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
						onClick={() => setMenuSelected(false)}
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
						offset={-100}
						id="link"
						onClick={() => setMenuSelected(false)}
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
							<i className="fab fa-linkedin-in fa-lg"></i>
						</a>
					</li>

					<li>
						<a
							href="https://www.twitter.com/stillvain_"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter fa-lg"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/darnellsylvain"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-instagram fa-lg"></i>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/darnellsylvain"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github fa-lg"></i>
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
