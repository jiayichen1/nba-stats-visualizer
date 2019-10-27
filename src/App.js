import React from "react";
import { render, ReactDOM } from "react-dom";

import Autocomplete from "./components/Autocomplete";
import names from "./components/allCurrentPlayersNames";


function App(){
	return (
        <form>
            <Autocomplete suggestions = {names} />
			      <input type="submit" value="How good is he?"></input>
        </form>
    )
}


export default App;