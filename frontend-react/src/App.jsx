import "./App.css";
import SiteNav from "./components/SiteNav";
import IntroSection from "./components/section/IntroSection";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PerviousWork from "./components/section/PerviousWork";
import Experience from "./components/section/Experience";
import Contact from "./components/Contact";
import Connect from "./components/Connect";

function App() {
	return (
		<div className="container-fluid app bg-light">
			<SiteNav />
			<div className=" app-body">
				<SideBar />
				<main className="pages m-0">
					<IntroSection />
					<Experience />
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
