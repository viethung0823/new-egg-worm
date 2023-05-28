import "./App.css";
import "./all.css";
import AnimatedVideo from "./components/AnimatedVideo/index.js";
import Reel from "./components/Reel/index.js";
import WhoWeAre from "./components/WhoWeAre/index.js";
import OurBusiness from "./components/OurBusiness/index.js";
import HomeWorks from "./components/HomeWorks/index.js";
import OurClients from "./components/OurClients/index.js";
import News from "./components/News/index.js";
import Other from "./components/Other/index.js";
import HomeGear from "./components/HomeGear/index.js";
import $ from "jquery";

function App() {
	$(document).ready(function () {
		console.log("loaded");
		$("#siteWrapper").appendTo(".app");
	});

	return (
		<>
			<AnimatedVideo></AnimatedVideo>
			<Reel></Reel>
			<WhoWeAre></WhoWeAre>
			<OurBusiness></OurBusiness>
			<HomeWorks></HomeWorks>
			<OurClients></OurClients>
			<News></News>
			<Other></Other>
			<HomeGear></HomeGear>
		</>
	);
}

export default App;
