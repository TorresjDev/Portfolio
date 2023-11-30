import React from "react";
import { Link } from "react-router-dom";

function SideBar({ isOpen, toggleSidebar, closeSidebar, clickToContact, clickToProjects, setTheme }) {
	return (
		<aside className={isOpen ? "sidebar open" : "sidebar"} onMouseLeave={closeSidebar}>
			<div className="top-sidebar">
				<div className="hidden-sidebar channel-name">Jesus Torres</div>
			</div>
			<div className="middle-sidebar">
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<div className="channel-logo sidebar-link" onClick={toggleSidebar}>
							<div className="channel-symbol" title="Expand Sidebar">
								<div className="material-symbols-outlined icon" title="Expand Sidebar">
									format_letter_spacing
								</div>
							</div>
						</div>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link">
							<div className="material-symbols-outlined icon" title="">
								dashboard
							</div>
							<div className="hidden-sidebar">About Me</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<a href={`${process.env.PUBLIC_URL}/Software-Engineer-Jesus-Torres.pdf`} className="sidebar-link" download>
							<div className="material-symbols-outlined icon" title="">
								post_add
							</div>
							<div className="hidden-sidebar">Resume</div>
						</a>
					</li>
					<li className="sidebar-list-item">
						<Link to="" className="sidebar-link" onClick={clickToProjects}>
							<div className="material-symbols-outlined icon" title="">
								add_task
							</div>
							<div className="hidden-sidebar">Projects</div>
						</Link>
					</li>
					<li className="sidebar-list-item">
						<div className="sidebar-link" onClick={clickToContact}>
							<div className="material-symbols-outlined icon" title="">
								perm_contact_calendar
							</div>
							<div className="hidden-sidebar">Reach Out</div>
						</div>
					</li>
				</ul>
			</div>
			<div className="bottom-sidebar">
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<div className="sidebar-link light" onClick={() => setTheme("theme-light")}>
							<div className="material-symbols-outlined icon" title="">
								radio_button_checked
							</div>
							<div className="hidden-sidebar">Light</div>
						</div>
					</li>
					<li className="sidebar-list-item">
						<div className="sidebar-link shade" onClick={() => setTheme("theme-shade")}>
							<div className="material-symbols-outlined icon" title="">
								radio_button_checked
							</div>
							<div className="hidden-sidebar">Shade</div>
						</div>
					</li>
					<li className="sidebar-list-item">
						<div className="sidebar-link dark" onClick={() => setTheme("theme-dark")}>
							<div className="material-symbols-outlined icon" title="">
								radio_button_checked
							</div>
							<div className="hidden-sidebar">Dark</div>
						</div>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default SideBar;
