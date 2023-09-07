import React from "react";
import welVid from "../../vid/sunrise.mp4";
import "./landing.css";

function WelcomeVideo() {
	return (
		<div className="welcome-vid">
			{/* <div className="overlay"></div> */}
			<video src={welVid} autoPlay loop muted />
			<div className="content">
				{/* <a href=""></a> */}
				<h2>Jesus Torres</h2>
				<p>Software Engineer</p>
				<div className="container">
					<div className="row">
						<div className="mx-auto my-2 col-md-1 btn btn-secondary resume">Resume</div>
						<div className="mx-auto my-2 col-md-2 px-1 btn btn-dark contact-me">Contact Me</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeVideo;
