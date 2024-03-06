import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; // основные стили
import "swiper/css/effect-coverflow"; // стили для coverflow
import "swiper/css/pagination"; // стили для пагинации
import "swiper/css/navigation"; // стили для навигации

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "./modullesGalery.scss";

const imgContext = require.context("../img", false, /\.(jpg|jpeg|png)$/);
const images = imgContext.keys().map(imgContext);

const Galery = () => {
	const SectionStyle = {
		height: "100vh",
		width: "100%",
		display: "flex",
	};
	return (
		<>
			<FullpageSection style={SectionStyle}>
				<div className="container">
					<h1 className="heading"> Gallery</h1>
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						slidesPerView={"auto"}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 2.5,
						}}
						pagination={{ el: ".swiper-pagination", clickable: true }}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
							clickable: true,
						}}
						modules={[EffectCoverflow, Pagination, Navigation]}
						className="swiper_container"
					>
						{images.map((img, index) => (
							<SwiperSlide key={index}>
								{" "}
								<img src={img} alt={`Slide ${index}`} />{" "}
							</SwiperSlide>
						))}
						<div className="slider-controler">
							<div className="swiper-button-prev slider-arrow">
								<ion-icon name="arrow-back-outline"></ion-icon>
							</div>
							<div className="swiper-button-next slider-arrow">
								<ion-icon name="arrow-forward-outline"></ion-icon>
							</div>
							<div className="swiper-pagination"></div>
						</div>
					</Swiper>
				</div>
			</FullpageSection>
			<FullpageSection style={SectionStyle}>
				<div className="container">
					<h1 className="heading">Gallery</h1>
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						loop={true}
						slidesPerView={"auto"}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 2.5,
						}}
						pagination={{ el: ".swiper-pagination", clickable: true }}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
							clickable: true,
						}}
						modules={[EffectCoverflow, Pagination, Navigation]}
						className="swiper_container"
					>
						{images.map((img, index) => (
							<SwiperSlide key={index}>
								{" "}
								<img src={img} alt={`Slide ${index}`} />{" "}
							</SwiperSlide>
						))}
						<div className="slider-controler">
							<div className="swiper-button-prev slider-arrow">
								<ion-icon name="arrow-back-outline"></ion-icon>
							</div>
							<div className="swiper-button-next slider-arrow">
								<ion-icon name="arrow-forward-outline"></ion-icon>
							</div>
							<div className="swiper-pagination"></div>
						</div>
					</Swiper>
				</div>
			</FullpageSection>
		</>
	);
};

export default Galery;
