import React, { useState, useRef, useEffect } from "react";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PerviousWork from "./components/prework/PerviousWork";
import Contact from "./components/contact/Contact";
import Connect from "./components/connect/Connect";
import SkillRotator from "./components/skills/SkillRotator";
import WelcomeVideo from "./components/welcome/WelcomeVideo";
import "./app.css";

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [theme, setTheme] = useState("theme-light");

	useEffect(() => {
		document.body.className = theme;
		document.documentElement.className = theme;
	}, [theme]);

	const contactRef = useRef(null);
	const skillRotatorRef = useRef(null);

	const toggleSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const scrollToContact = () => {
		console.log("scrollToContact", contactRef);
		contactRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToProjects = () => {
		console.log("scrollToContact", contactRef);

		skillRotatorRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={`container-fluid app ${theme.color}`}>
			<SiteNav clickToContact={scrollToContact} />
			<div className="app-body">
				<SideBar
					isOpen={isSidebarOpen}
					toggleSidebar={toggleSidebar}
					closeSidebar={closeSidebar}
					clickToContact={scrollToContact}
					clickToProjects={scrollToProjects}
					setTheme={setTheme}
				/>
				<main className={isSidebarOpen ? "pages open" : "pages"}>
					<WelcomeVideo clickToContact={scrollToContact} />
					<SkillRotator ref={skillRotatorRef} />
					<PerviousWork />
					<section className="my-3">
						<Connect />
					</section>
					<section className="my-3">
						<Contact ref={contactRef} id="contact" />
					</section>
				</main>
			</div>
			<Footer id="footer" />
		</div>
	);
}

export default App;
