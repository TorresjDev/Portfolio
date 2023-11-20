import React, { useState } from "react";
import "./prework.css";

function PerviousWork() {
	const [preWork] = useState([
		{
			img: "https://i.ibb.co/wJw2KcP/picture-page.jpg",
			title: "Photo Gallery",
			description: "css project adjusting image to fit screen"
		},
		{
			img: "https://i.ibb.co/jw55Bp8/magazine.jpg",
			title: "Article Project",
			description: "Article using html, css, js for declaration of independence"
		},
		{
			img: "https://i.ibb.co/GP3dq4c/random-quote.jpg",
			title: "Random Quote Generator",
			description: "using html, css and javascript to generate random quotes."
		}
	]);

	const carouselWork = (data, index) => {
		// console.log("hello", { data, index, date: Date.now() });
		return (
			<div
				className={`carousel-item ${index === 0 ? "active" : ""}`}
				data-bs-interval="3000"
				key={`${index}) ${data.title} - ${Date.now()}`}
			>
				<img src={data.img} className=" mx-auto d-block rounded" alt="..." />
				<div className="carousel-caption d-none d-md-block">
					<h5>{data.title}</h5>
					<p>{data.description}</p>
				</div>
			</div>
		);
	};

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
				<div className="carousel-inner">{preWork.map((data, index) => carouselWork(data, index))}</div>
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
