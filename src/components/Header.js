import { Link } from "react-router-dom";
import React from "react";


function Header(props) {
	const [page, setPage] = React.useState(false);
	const [isActiveLink, setIsActiveLink] = React.useState(null);
	const [isActiveLinkInside, setIsActiveLinkInside] = React.useState(null);


	const handleLinkClick = (link) => {
		setIsActiveLink(link);
		if (link === "/pogonag") {
			setPage(true);
		} else {
			setPage(false);
			setIsActiveLinkInside(null);
		}
	};

	const hadleClickHome = () => {
		setIsActiveLink(null);
		window.scrollTo(0, 0);
		setPage(null);
		setIsActiveLinkInside(null);
	};

	const handleLinkClickInside = (link) => {
		setIsActiveLinkInside(link);
	};
	return (
		<div className="header">
			<div className="stuctureHeader">
				<Link to="/" onClick={() => hadleClickHome()}>
					<h1 className="animate__animated animate__flash">LOGO</h1>
				</Link>
				<div className="d-flex flex-column w100p justify-around ">
					<div className="d-flex justify-end ">
						<div className=" contact">
							<img
								width={"30px"}
								height={"30px"}
								src={process.env.PUBLIC_URL + "/img/Maps.png"}
								alt="Maps"
							/>
							<img
								width={"30px"}
								height={"30px"}
								src={process.env.PUBLIC_URL + "/img/Telegram.svg"}
								alt="Telegram"
							/>
							<img
								width={"30px"}
								height={"30px"}
								src={process.env.PUBLIC_URL + "/img/Viber.png"}
								alt="Viber"
							/>
						</div>
					</div>
					<div className=" d-flex justify-end ">
						<div className="containerAch">
							<Link
								className={isActiveLink === "/pogonag" ? "active" : ""}
								to="/pogonag"
								onClick={() => handleLinkClick("/pogonag")}
							>
								Захист вiд викрадення
							</Link>
							<Link
								className={isActiveLink === "/sedfsd" ? "active" : ""}
								to="/sedfsd"
								onClick={() => handleLinkClick("/sedfsd")}
							>
								Шумо- вiбро iзоляцiя
							</Link>
							<Link
								className={isActiveLink === "/pogofsedfnag" ? "active" : ""}
								to="/pogofsedfnag"
								onClick={() => handleLinkClick("/pogofsedfnag")}
							>
								Захисна плiвка i тонування
							</Link>
							<Link
								className={isActiveLink === "/pogsdfonag" ? "active" : ""}
								to="/pogsdfonag"
								onClick={() => handleLinkClick("/pogsdfonag")}
							>
								Детейлiнг
							</Link>
							<Link
								className={isActiveLink === "/galery" ? "active" : ""}
								to="/galery"
								onClick={() => handleLinkClick("/galery")}
							>
								Галерея
							</Link>
						</div>
					</div>
				</div>
			</div>
			{page && (
				<div className=" d-flex justify-center ">
					<div className="containerAch2 animate__animated animate__fadeInDown">
						<Link
							className={
								isActiveLinkInside === "/pog32432423onag" ? "active" : ""
							}
							to="/pog32432423onag"
							onClick={() => handleLinkClickInside("/pog32432423onag")}
						>
							Системи захисту вiд угону з GPS/. GSM
						</Link>
						<Link
							className={
								isActiveLinkInside === "/sed2342342fsd" ? "active" : ""
							}
							to="/sed2342342fsd"
							onClick={() => handleLinkClickInside("/sed2342342fsd")}
						>
							Системи захисту з автозапуском
						</Link>
						<Link
							className={
								isActiveLinkInside === "/pogofse3242423dfnag" ? "active" : ""
							}
							to="/pogofse3242423dfnag"
							onClick={() => handleLinkClickInside("/pogofse3242423dfnag")}
						>
							Системи автомобiльного захисту з двох стороннiм зв'язком
						</Link>
						<Link
							className={
								isActiveLinkInside === "/pogsd223423fonag" ? "active" : ""
							}
							to="/pogsd223423fonag"
							onClick={() => handleLinkClickInside("/pogsd223423fonag")}
						>
							Системи автомобiльноi сигналiзацii без двох стороннього зв'язку
						</Link>
						<Link
							className={
								isActiveLinkInside === "/posaf23424sedgonag" ? "active" : ""
							}
							to="/posaf23424sedgonag"
							onClick={() => handleLinkClickInside("/posaf23424sedgonag")}
						>
							iмобiлайзери
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
export default Header;
