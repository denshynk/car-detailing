// ImageComponent.js
import React, { useEffect, useState } from "react";
import { Link, Element } from "react-scroll";

const ImageComponent = () => {
	const [showImage, setShowImage] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const startScroll = 500; // Например, после прокрутки на 500px

        setShowImage(scrollPosition > startScroll);
        
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={`image-container ${showImage ? "show" : ""}`}>
			<img
				src="/img/bmw4.png"
				style={{ width: "80%" }}
				alt="Описание изображения"
			/>
			<div className="dashed-line"></div>
		</div>
	);
};

export default ImageComponent;
