import React from "react";
import "./Showcase.css";
import ImgWithFallback from "./components/ImgWithFallBack";
import showcaseImage from "./images/showcaseImage@2x.png";
import showcaseImagewebp from "./images/showcaseImage@2x.webp";

import {
	FaLinkedinIn,
	FaTwitter,
	FaInstagram,
	FaGithub,
	FaEnvelope,
	FaMapMarker,
} from "react-icons/fa";

function Showcase() {
	return (
		<div className="showcase__container">
			<div className="showcase__info">
				<div className="showcaseInfo__tag">
					<p>Web Developer</p>
				</div>
				<h1>Darnell Sylvain</h1>
				<span>
					<FaEnvelope
						style={{ marginRight: "10px", color: "var(--textcolor)" }}
					/>
					<a
						href="mailto:darnellsylvain@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>Darnellsylvain@gmail.com</p>
					</a>
				</span>
				<span>
					<FaMapMarker
						style={{ marginRight: "10px", color: "var(--textcolor)" }}
					/>
					<p>London</p>
				</span>
				<ul className="showcase__socials">
					<li>
						<a
							href="https://www.linkedin.com/in/darnell-sylvain-85987b166"
							target="_blank"
							rel="noopener noreferrer"
							alt="LinkedIn Icon Link"
						>
							{/* <i className="fab fa-linkedin-in fa-lg"></i> */}
							<FaLinkedinIn size={21} />
						</a>
					</li>

					<li>
						<a
							href="https://www.twitter.com/darnellsylvain"
							target="_blank"
							rel="noopener noreferrer"
							alt="Twitter Icon Link"
						>
							<FaTwitter size={21} />
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/darnellsylvain"
							target="_blank"
							rel="noopener noreferrer"
							alt="Instagram Icon Link"
						>
							<FaInstagram size={21} />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/darnellsylvain"
							target="_blank"
							rel="noopener noreferrer"
							alt="Github Icon Link"
						>
							<FaGithub size={21} />
						</a>
					</li>
				</ul>
			</div>

			<div className="showcase__image">
				<ImgWithFallback
					src={showcaseImagewebp}
					fallback={showcaseImage}
					alt={`HTML, CSS and Javascript swirling around globe icon like atom`}
				/>

				{/* <img src={showcaseImage} alt="web dev"></img> */}
			</div>
		</div>
	);
}

export default Showcase;
