import React, { useState, useEffect } from "react";
import {
	
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import {
	Fullpage,
	FullPageSections,
	FullpageNavigation,
} from "@ap.cx/react-fullpage";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import Galery from "./pages/Galery";
import Footer from "./components/Footer";
import Detailing from "./pages/Detailing";
import DopPoslugy from "./pages/DopPoslugy";
import Shumoizol from "./pages/Shumoizol";
import ZahysnaPlivka from "./pages/ZahysnaPlivka";

function App() {
	const location = useLocation();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Имитация задержки загрузки страницы (вы можете использовать свою логику загрузки)
		const delay = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(delay);
	}, [location]);

	return (
		<div className="main">
			<Header />
			<Fullpage>
				<FullpageNavigation />
				<FullPageSections>
					<AnimatePresence
						initial={false}
						mode="wait"
						onExitComplete={() => setLoading(false)}
					>
						<Routes location={location}>
							<Route
								path="/"
								element={
									<motion.div
										key="home"
										initial={{ opacity: 1, x: "100%" }}
										animate={{ opacity: 1, x: "0%" }}
										exit={{ opacity: 0, x: "-100%" }}
										transition={{ duration: 0.5 }}
									>
										<Home />
									</motion.div>
								}
							/>
							<Route
								path="/save"
								element={
									<motion.div
										key="save"
										initial={{ opacity: 1, x: "100%" }}
										animate={{ opacity: 1, x: "0%" }}
										exit={{ opacity: 0, x: "-100%" }}
										transition={{ duration: 0.5 }}
									>
										<Save />
									</motion.div>
								}
							/>
							<Route
								path="/detailing"
								element={
									<motion.div
										key="save"
										initial={{ opacity: 1, x: "100%" }}
										animate={{ opacity: 1, x: "0%" }}
										exit={{ opacity: 0, x: "-100%" }}
										transition={{ duration: 0.5 }}
									>
										<Detailing />
									</motion.div>
								}
							/>
							<Route
								path="/dopposlugy"
								element={
									<motion.div
										key="save"
										initial={{ opacity: 1, x: "100%" }}
										animate={{ opacity: 1, x: "0%" }}
										exit={{ opacity: 0, x: "-100%" }}
										transition={{ duration: 0.5 }}
									>
										<DopPoslugy />
									</motion.div>
								}
							/>

							<Route
								path="/shumoizol"
								element={
									<motion.div
										key="save"
										initial={{ opacity: 1, x: "100%" }}
										animate={{ opacity: 1, x: "0%" }}
										exit={{ opacity: 0, x: "-100%" }}
										transition={{ duration: 0.5 }}
									>
										<Shumoizol />
									</motion.div>
								}
							/>
							<Route
								path="/zahysnaplivka"
								element={
									<motion.div
										key="save"
										initial={{ opacity: 1, x: "100%" }}
										animate={{ opacity: 1, x: "0%" }}
										exit={{ opacity: 0, x: "-100%" }}
										transition={{ duration: 0.5 }}
									>
										<ZahysnaPlivka />
									</motion.div>
								}
							/>
							<Route
								path="/galery"
								element={
									<motion.div
										key="galery"
										initial={{ opacity: 0, x: "100%" }}
										animate={{ opacity: 1, x: "0%" }}
										exit={{ opacity: 0, x: "-100%" }}
										transition={{ duration: 0.5 }}
									>
										<Galery />
									</motion.div>
								}
							/>
						</Routes>
					</AnimatePresence>
					<Footer />
				</FullPageSections>
			</Fullpage>
			{loading && <div className="loading-overlay">Loading...</div>}
		</div>
	);
}

export default App;
