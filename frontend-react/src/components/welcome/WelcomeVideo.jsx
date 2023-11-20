import React from "react";
import welVid from "../../vid/sunrise.mp4";
import "./welcome.css";
// import WelcomeContent from "./WelcomeContent";

function WelcomeVideo({ isOpen, scrollContact }) {
	return (
		<div className="welcome-vid">
			{/* <div className="overlay"></div> */}
			<video src={welVid} autoPlay loop muted />
			{/* <WelcomeContent /> */}
			<div className={isOpen ? "content open" : "content"}>
				<h2>Jesus Torres</h2>
				<p>Software Engineer</p>
				<div className="container-fluid">
					<div className="row wel-row">
						<div className="my-2 col-md-1 col-sm-1">
							<a href="/pdf/Software-Engineer-Jesus-Torres.pdf" download className="btn btn-secondary resume">
								Resume
							</a>
						</div>
						<div className="col-md-2 col-sm-1">
							<a href="https://www.linkedin.com/in/torresdev/" target="_blank" className="btn">
								<i className="fab fa-linkedin"></i>
							</a>
						</div>
						<div className="col-md-2 col-sm-1">
							<a id="profile-link" href="https://github.com/TorresjDev" target="_blank" className="btn">
								<i className="fab fa-github"></i>
							</a>
						</div>
						<div className="my-2 col-md-1 col-sm-1" onClick={scrollContact}>
							<div className="btn btn-secondary contact-me">Contact Me</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WelcomeVideo;
