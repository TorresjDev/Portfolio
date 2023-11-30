import React, { useState, useEffect } from "react";
import "./prework.css";
import Carousel from "../carousel/Carousel";

function PerviousWork() {
	const [preWork, setPreWork] = useState({
		projectDataAr: [
			{
				title: "Photo Gallery",
				description: "css project adjusting image to fit screen",
				img: "https://i.ibb.co/wJw2KcP/picture-page.jpg",
				liveLink: "http://",
				githubLink: "http://"
			},
			{
				title: "Article Project",
				description: "Article using html, css, js for declaration of independence",
				img: "https://i.ibb.co/jw55Bp8/magazine.jpg",
				liveLink: "http://",
				githubLink: "http://"
			},
			{
				title: "Random Quote Generator",
				description: "using html, css and javascript to generate random quotes.",
				img: "https://i.ibb.co/GP3dq4c/random-quote.jpg",
				liveLink: "http://",
				githubLink: "http://"
			}
		],
		projectComponents: [],
		projectsIsMapped: false
	});

	useEffect(() => {
		if (!preWork.projectsIsMapped) {
			setPreWork((prevState) => {
				const newState = { ...prevState };
				newState.projectComponents = newState.projectDataAr.map((data, index) => carouselWork(data, index));
				newState.projectsIsMapped = true;
				return newState;
			});
		}
	}, [preWork.projectsIsMapped]);

	const carouselWork = (data, index) => {
		return <Carousel data={data} index={index} />;
	};

	return (
		<div className="pre-work">
			<h2 className="pre-work-header">Projects</h2>
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
				<div className="carousel-inner">{preWork.projectsIsMapped && preWork.projectComponents}</div>
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
