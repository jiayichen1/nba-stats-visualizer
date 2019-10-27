import React from "react";
import { render } from "react-dom";

import Autocomplete from "./components/Autocomplete";
import names from "./components/allCurrentPlayersNames";

function App() {
	return (
	<div>
		<h1> This is nba stat visualizer Autocomplete demo </h1>
		<Autocomplete suggestions = {names} />
  	</div>
  	);
}
export default App;