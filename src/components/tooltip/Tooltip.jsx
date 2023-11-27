import React from "react";

function Tooltip(props) {
	// console.log(Tooltip, { props });

	return (
		<div className="tooltip" role="tooltip">
			{props.content}
		</div>
	);
}

export default React.memo(Tooltip);
