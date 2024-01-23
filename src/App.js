import React from "react";

import FullPageScroll from "./components/FullPageScroll";
import Header from "./components/Header";


function App() {
	return (
		<div className="main">
			<Header />
			<FullPageScroll />
			<div className="footer"></div>
		</div>
	);
}

export default App;
