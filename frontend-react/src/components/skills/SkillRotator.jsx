import React from "react";
import "./skillrotator.css";

function SkillRotator() {
	const skills = [
		{
			name: "HTML5",
			link: "https://en.wikipedia.org/wiki/HTML5",
			img: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
		},
		{
			name: "CSS",
			link: "https://www.w3schools.com/css",
			img: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
		},
		{
			name: "JavaScript",
			link: "https://www.javascript.com/",
			img: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
		},
		{
			name: "React",
			link: "https://reactjs.org/",
			img: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
		},
		{ name: "JQuery", link: "https://jquery.com/", img: "https://profilinator.rishav.dev/skills-assets/jquery.png" },
		{
			name: "C#",
			link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
			img: "https://profilinator.rishav.dev/skills-assets/csharp-original.svg"
		},
		{
			name: ".NET Core",
			link: "https://dotnet.microsoft.com/download",
			img: "https://profilinator.rishav.dev/skills-assets/dotnetcore.png"
		},
		{
			name: "SSMS",
			link: "https://www.microsoft.com/en-us/sql-server",
			img: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
		},
		{
			name: "MongoDB",
			link: "https://www.mongodb.com/",
			img: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
		},
		{
			name: "Express",
			link: "https://expressjs.com/",
			img: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
		},
		{
			name: "NodeJS",
			link: "https://nodejs.org/",
			img: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
		}
		// { name: "Python", link: "", img: "A versatile programming language used in various domains." }
	];

	const skillElements = skills.map((skill, index) => {
		return (
			<a key={`${skill.name}-${index}`} className="skill" href={skill.link} target="_blank">
				<img src={skill.img} alt={skill.name} height="45" />
			</a>
		);
	});

	return (
		<div className="skill-rotator-container bg-light pt-2 pb-1">
			<div className="rotate py-2">{skillElements}</div>
		</div>
	);
}

export default SkillRotator;
