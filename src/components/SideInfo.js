import React from "react";

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
							<i className="fab fa-linkedin-in fa-lg"></i>
						</a>
					</li>

					<li>
						<a
							href="https://www.twitter.com/darnellsylvain"
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
