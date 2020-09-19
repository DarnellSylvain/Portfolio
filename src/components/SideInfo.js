import React from "react";

import linkedinIMG from "../images/linkedin@2x.png";
import twitterIMG from "../images/twitter@2x.png";
import githubIMG from "../images/github@2x.png";
import instagramIMG from "../images/instagram@2x.png";

function SideInfo() {
	return (
		<>
			<div className="sideSocials">
				<ul>
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
				<div className="sideLine"></div>
			</div>
			<div className="sideEmail right">
				<a
					href="mailto:darnellsylvain@hotmail.co.uk"
					target="_blank"
					rel="noopener noreferrer"
				>
					<p>Darnellsylvain@gmail.com</p>
				</a>
				<div className="sideLine"></div>
			</div>
		</>
	);
}

export default SideInfo;
