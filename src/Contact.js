import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";

import { FaEnvelope } from "react-icons/fa";

function Contact() {
	return (
		<Element className="contact__container" id="contact">
			<div className="h2__header">
				<div className="header__line"></div>
				<h2>Contact</h2>
			</div>

			<h1>Get In Touch</h1>
			<p>
				I am currently looking for new opportunities! If you wish to contact me
				please do so via the email provided or message me on one of my social
				media accounts!
			</p>
			<a
				href="mailto:darnellsylvain@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="contact__emailButton">
					<FaEnvelope size={32} style={{ color: "var(--backgroundcolor)" }} />
				</div>
			</a>
		</Element>
	);
}

export default Contact;
