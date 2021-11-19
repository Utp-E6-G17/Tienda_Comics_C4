import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import LogginComic from "./components/LogginComic";
import RegistroComic from "./components/RegistroComic";

function App() {
	return (
		<header className="App-header">
			<div className="App">
				<Router>
					<Switch>
						<Route path="/" exact>
							<LogginComic />
						</Route>
						<Route path="/RegistroComic">
							<RegistroComic />
						</Route>
					</Switch>
				</Router>
				<ToastContainer />
			</div>
		</header>
	);
}

export default App;
