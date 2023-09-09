import "./app.css";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PerviousWork from "./components/PerviousWork";
import Contact from "./components/Contact";
import Connect from "./components/Connect";
// import Landing from "./components/Landing";
import SkillRotator from "./components/skills/SkillRotator";
import WelcomeVideo from "./components/welcome/WelcomeVideo";

function App() {
	return (
		<div className="container-fluid app bg-light">
			<SiteNav />
			<div className=" app-body">
				<SideBar />
				<main className="pages m-0">
					<WelcomeVideo />
					<SkillRotator />
					<PerviousWork />
					<section className="my-3">
						<Connect />
					</section>
					<section className="mt-1">
						<Contact />
					</section>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
