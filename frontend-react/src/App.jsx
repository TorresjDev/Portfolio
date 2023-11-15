import "./app.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PerviousWork from "./components/prework/PerviousWork";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
import SkillRotator from "./components/skills/SkillRotator";
import WelcomeVideo from "./components/welcome/WelcomeVideo";

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<div className="container-fluid app bg-light">
			<SiteNav />
			<div className=" app-body">
				<SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
				<main className="pages m-0">
					<WelcomeVideo isOpen={isSidebarOpen} />
					<SkillRotator />
					<PerviousWork />
					<section className="my-3">
						<Connect />
					</section>
					<section className="mt-1">
						<Contact id="contact" />
					</section>
				</main>
			</div>
			<Footer />
			<Routes>
				{/* <Switch> */}
				<Route path="/contact" component={<Contact />} />
				{/* </Switch> */}
			</Routes>
		</div>
	);
}

export default App;
