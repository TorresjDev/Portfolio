import React from "react";
import "./tooltip.css";

function Tooltip(props) {
	// console.log("tooltip", { props });

	return (
		<div className="tooltip" role="tooltip">
			{props.content}
		</div>
	);
}

export default React.memo(Tooltip);
