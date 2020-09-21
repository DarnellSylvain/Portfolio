import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";

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
				href="mailto:darnellsylvain@hotmail.co.uk"
				target="_blank"
				rel="noopener noreferrer"
			>
				<button className="contact__emailButton">
					<i className="fas fa-envelope fa-2x"></i>
				</button>
			</a>
		</Element>
	);
}

export default Contact;
