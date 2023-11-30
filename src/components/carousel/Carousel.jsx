import React from "react";
import Tooltip from "../tooltip/Tooltip";
import "./carousel.css";

function Carousel({ data, index }) {
	console.log("Carousel", { data, index });

	return (
		<div
			className={`carousel-item mt-1 ${index === 0 ? "active" : ""}`}
			data-bs-interval="3000"
			key={`${index}) ${data.title} - ${Date.now()}`}
		>
			<img src={data.img} className=" mx-auto d-block rounded" alt="..." />
			<div className="carousel-caption">
				<div className="row caption">
					<div className="col-md-1">
						<a href={data.liveLink} rel="noreferrer" target="_blank" className="live-demo">
							<div className="material-symbols-outlined icon" title="live demo">
								open_in_new
								<Tooltip content={"live demo"} />
							</div>
						</a>
					</div>
					<div className="col-md-8">
						<h5>{data.title}</h5>
						<p>{data.description}</p>
					</div>
					<div className="col-md-1">
						<a href={data.githubLink} rel="noreferrer" target="_blank" className="git-rep-link" title="git code">
							<i className="fab fa-github icon">
								<Tooltip content={"git code"} />
							</i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default React.memo(Carousel);
