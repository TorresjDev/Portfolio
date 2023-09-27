import React from "react";
import "./prework.css";

function PerviousWork() {
	return (
		<div className="pre-work p-1 m-1">
			<div id="carousel-preWork" className="carousel slide carousel-fade" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carousel-preWork"
						data-bs-slide-to="0"
						className="active"
						aria-label="Slide 1"
					></button>
					<button type="button" data-bs-target="#carousel-preWork" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carousel-preWork" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item  active" data-bs-interval="3000">
						<img src="https://i.ibb.co/GP3dq4c/random-quote.jpg" className=" mx-auto d-block" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
					<div className="carousel-item " data-bs-interval="3000">
						<img src="https://i.ibb.co/jw55Bp8/magazine.jpg" className=" mx-auto d-block" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div>
					</div>
					<div className="carousel-item " data-bs-interval="3000">
						<img src="https://i.ibb.co/wJw2KcP/picture-page.jpg" className=" mx-auto d-block" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carousel-preWork" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carousel-preWork" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}

export default PerviousWork;
