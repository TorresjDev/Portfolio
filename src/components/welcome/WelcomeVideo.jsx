import React from "react";
import welVid from "../../vid/sunrise.mp4";
import "./welcome.css";

function WelcomeVideo({ scrollContact }) {
	return (
		<div className="welcome-vid">
			<div className="content">
				<div className="row title">
					<h2>Jesus Torres</h2>
					<p>Software Engineer</p>
				</div>
				<div className="container-fluid">
					<div className="row wel-row">
						<div className="my-2 col-md-2 col-sm-1">
							<a href="%PUBLIC_URL%/Software-Engineer-Jesus-Torres.pdf" download className="btn btn-secondary resume">
								Resume
							</a>
						</div>
						<div className="col-md-1 col-sm-1 ms-auto">
							<a href="https://www.linkedin.com/in/torresdev/" target="_blank" className="btn">
								<i className="fab fa-linkedin"></i>
							</a>
						</div>
						<div className="col-md-1 col-sm-1 mx-auto">
							<a id="profile-link" href="https://github.com/TorresjDev" target="_blank" className="btn">
								<i className="fab fa-github"></i>
							</a>
						</div>
						<div className="my-2 col-lg-3 col-md-3 col-sm-4" onClick={scrollContact}>
							<div className="btn btn-secondary contact-me">Contact Me</div>
						</div>
					</div>
				</div>
			</div>
			<video src={welVid} autoPlay loop muted />
		</div>
	);
}

export default WelcomeVideo;
