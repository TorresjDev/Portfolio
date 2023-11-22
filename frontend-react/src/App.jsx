import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PerviousWork from "./components/prework/PerviousWork";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
import SkillRotator from "./components/skills/SkillRotator";
import WelcomeVideo from "./components/welcome/WelcomeVideo";
import "./app.css";

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [theme, setTheme] = useState("theme-blue");

	const contactRef = useRef(null);

	const toggleSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const scrollOnClick = () => {
		console.log("scrollOnClick", contactRef);
		contactRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={`container-fluid app bg-light ${theme}`}>
			<SiteNav scrollContact={scrollOnClick} />
			<div className=" app-body">
				<SideBar
					isOpen={isSidebarOpen}
					toggleSidebar={toggleSidebar}
					closeSidebar={closeSidebar}
					scrollOnClick={scrollOnClick}
					setTheme={setTheme} // Passing setTheme
				/>
				<main className="pages m-0">
					<WelcomeVideo isOpen={isSidebarOpen} scrollContact={scrollOnClick} />
					<SkillRotator />
					<PerviousWork />
					<section className="my-3">
						<Connect />
					</section>
					<section className="mt-1">
						<Contact ref={contactRef} id="contact" />
					</section>
				</main>
			</div>
			<Footer id="footer" />
			<Routes>
				{/* <Switch> */}
				<Route path="/contact" component={<Contact />} />
				{/* </Switch> */}
			</Routes>
		</div>
	);
}

export default App;
