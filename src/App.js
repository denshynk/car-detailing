import React from "react";

import FullPageScroll from "./components/FullPageScroll";
import Header from "./components/Header";

function App() {
	return (
		<div className="main">
			<Header />
			<FullPageScroll />
			<div className="footer">
				<div className="LastPagepage">
					<div className="CallBack"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
