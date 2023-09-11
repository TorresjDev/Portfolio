import React from "react";
import welVid from "../../vid/sunrise.mp4";
import "./welcome.css";
import WelcomeContent from "./WelcomeContent";

function WelcomeVideo() {
	return (
		<div className="welcome-vid">
			{/* <div className="overlay"></div> */}
			<video src={welVid} autoPlay loop muted />
			<WelcomeContent />
		</div>
	);
}

export default WelcomeVideo;
