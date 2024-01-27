// ImageComponent.js
import React, { useEffect, useState, useContext } from "react";
import { FullpageContext } from "@ap.cx/react-fullpage";

const ImageComponent = () => {
	const [showImage, setShowImage] = useState(false);
	const [showLines, setShowLines] = useState(false);

	const fullpageContext = useContext(FullpageContext);
	const currentSlideNumber = fullpageContext?.number || 0;

	useEffect(() => {
		if (currentSlideNumber === 1) {
			setShowImage(true);
			setTimeout(() => {
				setShowLines(true);
			}, 2000);
		} else {
			setShowImage(false);
			setShowLines(false);
		}
	}, [currentSlideNumber]);

	return (
		<div className={`image-container ${showImage ? "show" : ""}`}>
			<>
				<div className={`line line1${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Автозапуск</h2>
					</div>
				</div>
				<div className={`line line2${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Сигналізація</h2>
					</div>
				</div>
				<div className={`line line3${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2>Тонування</h2>
					</div>
				</div>
				<div className={`line line4${showLines ? " show" : ""}`}>
					<div className="lineText">
						<h2 className="h22">Шумо-вiбро iзоляція </h2>
					</div>
				</div>
			</>

			<img
				src="/img/bmw4.png"
				style={{ width: "80%" }}
				alt="Описание изображения"
			/>
		</div>
	);
};

export default ImageComponent;
