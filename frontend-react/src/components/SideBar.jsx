import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
	const [state, setState] = useState(false);

	const handleSideBar = () => {
		setState(true);
	};

	return (
		<aside className={state ? "sidebar open" : "sidebar"} onMouseLeave={() => setState(false)}>
			<div className="top-sidebar my-1 py-1">
				<div className="channel-logo" onClick={handleSideBar}>
					<div className="channel-symbol" title="Expand Sidebar">
						<div className="material-symbols-outlined " title="Expand Sidebar">
							format_letter_spacing
						</div>
					</div>
				</div>
				<div className="hidden-sidebar your-channel">{}</div>
				<div className="hidden-sidebar channel-name">Jesus Torres</div>
			</div>
			<div className="middle-sidebar">
				<ul className="sidebar-list">
					<li className="sidebar-list-item active">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								dashboard
							</div>
							<div className="hidden-sidebar">About Me</div>
						</Link>
					</li>
					{/* <li className="sidebar-list-item ">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								public
							</div>
							<div className="hidden-sidebar">Public</div>
						</Link>
					</li> */}
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								post_add
							</div>
							<div className="hidden-sidebar">Resume</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								add_task
							</div>
							<div className="hidden-sidebar">Projects</div>
						</Link>
					</li>
					{/* <li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								group
							</div>
							<div className="hidden-sidebar">Friends</div>
						</Link>
					</li> */}
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined" title="">
								perm_contact_calendar
							</div>
							<div className="hidden-sidebar">Reach Out</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className="bottom-sidebar">
				<ul className="sidebar-list"></ul>
			</div>
		</aside>
	);
}

export default SideBar;