import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NotFound from "./component/notfound";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./component/count";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
