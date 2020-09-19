import React from "react";
import "./Showcase.css";
import showcaseImage from "./images/showcaseImage@2x.png";
import envelope from "./images/envelope.png";
import mapMarker from "./images/map-marker.png";

import linkedinIMG from "./images/linkedin@2x.png";
import twitterIMG from "./images/twitter@2x.png";
import githubIMG from "./images/github@2x.png";
import instagramIMG from "./images/instagram@2x.png";

function Showcase() {
	return (
		<div className="showcase__container">
			<div className="showcase__info">
				<div className="showcaseInfo__tag">
					<p>Web Developer</p>
				</div>
				<h1>Darnell Sylvain</h1>
				<span>
					<img src={envelope} alt="envelope icon"></img>
					<a
						href="mailto:darnellsylvain@hotmail.co.uk"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p>Darnellsylvain@gmail.com</p>
					</a>
				</span>
				<span>
					<img src={mapMarker} alt="map marker icon"></img>
					<p>London</p>
				</span>
				<ul className="showcase__socials">
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
							<img
								src={twitterIMG}
								alt="map marker icon"
								style={{ paddingTop: "2px" }}
							></img>
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
			</div>

			<div className="showcase__image">
				<img src={showcaseImage} alt="web dev"></img>
			</div>
		</div>
	);
}

export default Showcase;
