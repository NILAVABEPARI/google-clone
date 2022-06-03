import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./contexts/StateContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StateContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StateContextProvider>
);
