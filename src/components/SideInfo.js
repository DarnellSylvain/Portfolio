import React from "react";

import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

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
				<div className="sideLine"></div>
			</div>
			<div className="sideEmail right">
				<a
					href="mailto:darnellsylvain@gmail.com"
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
