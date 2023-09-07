import React from "react";

function Connect() {
	return (
		<div>
			<div className="contact-section-header">
				<h2>Let's work together...</h2>
				<p>connections</p>
			</div>
			<div className="contact-links">
				<a href="https://www.linkedin.com/in/torresdev/" target="_blank" className="btn contact-details">
					<i className="fab fa-linkedin"></i> torresdev
				</a>
				<a id="profile-link" href="https://github.com/TorresjDev" target="_blank" className="btn contact-details">
					<i className="fab fa-github"></i> TorresjDev
				</a>
				{/* <a href="mailto:j.torres3.dev@gmail.com" className="btn contact-details">
					<i className="fa fa-paper-plane"></i> j.torres3.dev@gmail.com
				</a>
				<a href="tel:760-515-9294" className="btn contact-details">
					<i className="fas fa-mobile-alt"></i> Call me
				</a> */}
			</div>
		</div>
	);
}

export default Connect;
