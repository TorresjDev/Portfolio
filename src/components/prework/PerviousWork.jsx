import React, { useState, useEffect } from "react";
import "./prework.css";
import CarouselItem from "../carousel/CarouselItem";
import Carousel from "../carousel/Carousel";

function PerviousWork() {
	const [preWork, setPreWork] = useState({
		projectDataAr: [
			{
				title: "Photo Gallery",
				description: "css project adjusting image to fit screen",
				img: "https://i.ibb.co/wJw2KcP/picture-page.jpg",
				liveLink: "https://codepen.io/TorresjDev/pen/abKwMJO",
				githubLink: "https://github.com/TorresjDev/Projects/tree/main/FrontEnd/Picture-Page"
			},
			{
				title: "Article Project",
				description: "Article using html, css, js for declaration of independence",
				img: "https://i.ibb.co/jw55Bp8/magazine.jpg",
				liveLink: "https://codepen.io/TorresjDev/pen/MWXoRWa",
				githubLink: "https://github.com/TorresjDev/Projects/tree/main/FrontEnd/Magazine"
			},
			{
				title: "Random Quote Generator",
				description: "using html, css and javascript to generate random quotes.",
				img: "https://i.ibb.co/GP3dq4c/random-quote.jpg",
				liveLink: "https://codepen.io/TorresjDev/pen/yLjWZWP",
				githubLink: "https://github.com/TorresjDev/Projects/tree/main/FrontEnd/Random-Quotes"
			},
			{
				title: "The Institute to Advance Diversity",
				description:
					"an online platform connecting individuals with mentors nationwide for personal growth, entrepreneurship, and career advice.",
				img: "https://i.ibb.co/hRcPW2t/advdiv.png",
				liveLink: "https://advancingdiversity.azurewebsites.net/",
				githubLink: "https://github.com/TorresjDev/AdvDiversity"
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
		return <CarouselItem data={data} index={index} />;
	};

	return (
		<div className="pre-work">
			<h2 className="pre-work-header">Projects</h2>
			<Carousel toggleShow={preWork.projectsIsMapped} displayItems={preWork.projectComponents} />
		</div>
	);
}

export default PerviousWork;
