import React from "react";
import welVid from "../../vid/sunrise.mp4";
import "./landing.css";

function WelcomeVideo() {
	return (
		<div className="welcome-vid">
			{/* <div className="overlay"></div> */}
			<video src={welVid} autoPlay loop muted />
			<div className="content">
				<aside>hello</aside>
				<a href=""></a>
				<h2>Jesus Torres</h2>
				<p>Software Engineer</p>
				<div className="row">
					<div className="btn btn-outline-secondary">
						<p>Resume</p>
					</div>
					<div className="btn btn-outline-success">
						<p>Contact Me</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeVideo;
