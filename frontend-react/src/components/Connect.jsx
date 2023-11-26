import React from "react";

// import wtImg from "https://wakatime.com/static/img/wakatime.svg";

function Connect() {
	return (
		<div>
			<div className="connect-section-header">
				<h2>Let's connect</h2>
			</div>
			<div className="connect-links">
				<a href="https://www.linkedin.com/in/torresdev/" target="_blank" className="connect-details">
					<i className="fab fa-linkedin" data-bs-toggle="tooltip" data-bs-title="torresdev"></i>
				</a>
				<a id="profile-link" href="https://github.com/TorresjDev" target="_blank" className="connect-details">
					<i className="fab fa-github" data-bs-toggle="tooltip" data-bs-title="torresdev"></i>
				</a>
				<a id="profile-link" href="https://codepen.io/TorresjDev" target="_blank" className="connect-details">
					<i className="fa fa-codepen" data-bs-toggle="tooltip" data-bs-title="torresdev"></i>
				</a>
				<a id="profile-link" href="https://codepen.io/TorresjDev" target="_blank" className="connect-details">
					<img src="https://wakatime.com/static/img/wakatime.svg" className="wakatime-icon" alt="" srcSet="" />
				</a>
				{/* <a id="profile-link" href="https://codepen.io/TorresjDev" target="_blank" className="connect-details">
					<img src={wtImg} alt="" srcSet="" />
				</a> */}
				{/* <a href="mailto:j.torres3.dev@gmail.com" className="connect-details">
					<i className="fa fa-paper-plane"></i> j.torres3.dev@gmail.com
				</a>
				<a href="tel:760-515-9294" className="connect-details">
					<i className="fas fa-mobile-alt"></i> Call me
				</a> */}
			</div>
		</div>
	);
}

export default Connect;
