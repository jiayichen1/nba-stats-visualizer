import React from "react";
import { render, ReactDOM } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

import Autocomplete from "./components/Autocomplete";
import names from "./components/allCurrentPlayersNames";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}


function App(){
	usePageViews();
	return (
        <form onSubmit={this.handleSubmit}>
            <Autocomplete suggestions = {names} />
			<input type="submit"></input>
        </form>
    )
}


export default App;