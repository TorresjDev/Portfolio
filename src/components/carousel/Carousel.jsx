import React from "react";

function Carousel(props) {
	console.log({ props });

	return (
		<div id="carousel-preWork" className="carousel slide carousel-fade" data-bs-ride="carousel">
			<div className="carousel-indicators">
				{props.toggleShow &&
					props.displayItems.map((item, index) => {
						return (
							<button
								key={index + Date.now()}
								type="button"
								className={index === 1 ? "active" : ""}
								data-bs-target="#carousel-preWork"
								data-bs-slide-to={index}
								aria-label={`Slide ${index - 1}`}
							></button>
						);
					})}
			</div>
			<div className="carousel-inner">{props.toggleShow && props.displayItems}</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carousel-preWork" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carousel-preWork" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}

export default Carousel;
