import React from "react";

function Tooltip() {
	return (
		<button
			type="button"
			class="btn btn-secondary"
			data-bs-toggle="tooltip"
			data-bs-placement="top"
			title="Tooltip on top"
			animation="true"
		>
			Tooltip on top
		</button>
	);
}

export default Tooltip;
