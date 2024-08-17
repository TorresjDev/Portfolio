import React from "react";
import devLogo from "../images/dev-logo-enhanced.png";

function SiteNav({ clickToContact }) {
	return (
		<nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-between">
			<img src={devLogo} className="dev-logo rounded" alt="logo" />
			<div>
				<div
					className="collapse navbar-collapse mx-1 text-uppercase fw-bolder d-flex justify-content-end"
					id="navbarSupportedContent"
				>
					<div className="navbar-nav">
						<div className="nav-item mx-1">Full-Stack </div>
						<div className="nav-item mx-2">Software Developer</div>
					</div>
					<div className="user-navbar mx-1 ">
						<div className="dropdown">
							<button className="dropbox" type="button">
								<div className="material-symbols-outlined" title="" style={{ padding: "3px 3px 1px 2px" }}>
									dropdown
								</div>
							</button>
							<div className="dropdown-content">
								<div className="dd-link btn" onClick={clickToContact}>
									Contact Me
								</div>
								<a className="dd-link btn" href={`${process.env.PUBLIC_URL}/Software-Engineer-Jesus-Torres.pdf`} download>
									Resume
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default SiteNav;
