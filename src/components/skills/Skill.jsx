import React from "react";
import Tooltip from "../tooltip/Tooltip";

function Skill({ skill, index }) {
	console.log("Skill", { skill, index });

	return (
		<a key={`${skill.name}-${index}`} className="skill" href={skill.link} target="_blank" rel="noreferrer">
			<img src={skill.img} alt={skill.name} height="45" />
			<Tooltip content={skill.name} />
		</a>
	);
}

export default React.memo(Skill);
