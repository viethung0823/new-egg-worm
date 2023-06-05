import "./App.css";
import "./all.css";
import Brands from "./components/Brands/index.js";

import $ from "jquery";

function App() {
	$(document).ready(function () {
		console.log("loaded");
		$("#siteWrapper").appendTo(".app");
	});

	return (
		<>
			<Brands></Brands>
		</>
	);
}

export default App;
