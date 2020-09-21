import React from "react";
import "./Showcase.css";
import showcaseImage from "./images/showcaseImage@2x.png";

function Showcase() {
	return (
		<div className="showcase__container">
			<div className="showcase__info">
				<div className="showcaseInfo__tag">
					<p>Web Developer</p>
				</div>
				<h1>Darnell Sylvain</h1>
				<span>
					<i className="fas fa-envelope"></i>
					<a
						href="mailto:darnellsylvain@hotmail.co.uk"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>Darnellsylvain@gmail.com</p>
					</a>
				</span>
				<span>
					<i className="fas fa-map-marker fm-lg"></i>
					<p>London</p>
				</span>
				<ul className="showcase__socials">
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
							{/* <img src={twitterIMG} alt="map marker icon"></img> */}
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
			</div>

			<div className="showcase__image">
				<img src={showcaseImage} alt="web dev"></img>
			</div>
		</div>
	);
}

export default Showcase;
