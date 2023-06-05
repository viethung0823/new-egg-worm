import "./App.css";
import "./all.css";
import Media from "./components/Media/index.js";

import $ from "jquery";

function App() {
	$(document).ready(function () {
		$("#page").append($(".app"));
	});

	return (
		<div className="app">
			<Media></Media>
		</div>
	);
}

export default App;
