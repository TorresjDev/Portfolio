import React from "react";
import welVid from "../../vid/sunrise.mp4";
import "./welcome.css";
// import WelcomeContent from "./WelcomeContent";

function WelcomeVideo({ isOpen }) {
	return (
		<div className="welcome-vid">
			{/* <div className="overlay"></div> */}
			<video src={welVid} autoPlay loop muted />
			{/* <WelcomeContent /> */}
			<div className={isOpen ? "content open" : "content"}>
				<h2>Jesus Torres</h2>
				<p>Software Engineer</p>
				<div className="container">
					<div className="row wel-row">
						<div className="mx-auto my-2 col-md-1">
							<a href="/pdf/Software-Engineer-Jesus-Torres.pdf" download className="btn btn-secondary resume">
								Resume
							</a>
						</div>
						<div className="mx-auto col-md-2">
							<a href="https://www.linkedin.com/in/torresdev/" target="_blank" className="btn">
								<i className="fab fa-linkedin"></i>
							</a>
						</div>
						<div className="mx-auto col-md-2">
							<a id="profile-link" href="https://github.com/TorresjDev" target="_blank" className="btn">
								<i className="fab fa-github"></i>
							</a>
						</div>
						<div className="mx-auto my-2 col-md-2 px-1 btn btn-secondary contact-me">Contact Me</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeVideo;
