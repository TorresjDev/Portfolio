import React from "react";
import "./skillrotator.css";

function SkillRotator() {
	const skills = [
		{ name: "JavaScript", description: "A programming language used for web development." },
		{ name: "React", description: "A JavaScript library for building user interfaces." },
		{ name: "HTML", description: "A markup language for creating web pages." },
		{ name: "CSS", description: "A stylesheet language for desig ning web pages." },
		{ name: "C#", description: "A programming language for Windows and web applications." },
		{ name: "Python", description: "A versatile programming language used in various domains." }
	];

	const currentSkill = skills.map((skill, index) => {
		return (
			<div key={`${skill} - ${index}`} className="col-md-1 skill">
				{skill.name}
				{/* <p>{skill.description}</p> */}
			</div>
		);
	});

	return (
		<div className="skill-rotator-container">
			<div className="rotate">{currentSkill}</div>
		</div>
	);
}

export default SkillRotator;
