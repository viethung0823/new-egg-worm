import "./App.css";
import "./all.css";
import Media from "./components/Media/index.js";

import $ from "jquery";

function App() {
	$(document).ready(function () {
		console.log("loaded");
		$("#siteWrapper").appendTo(".app");
	});

	return (
		<>
			<Media></Media>
		</>
	);
}

export default App;
