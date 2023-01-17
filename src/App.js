import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
// import { RouteShow } from "./components/RouteShow";
import { Footer } from "./components/Footer";
import { Results } from "../src/components/Results";

const App = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
				<Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				{/* <RouteShow /> */}
				<Results />
				<Footer />
			</div>
		</div>
	);
};

export default App;
