import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";

const ZahysnaPlivka = () => {
	const SectionStyle = {
		height: "100vh",
		width: "100%",
		display: "flex",
	};
	return (
		<FullpageSection style={SectionStyle}>
			<div
				className="firstPageTAG"
				style={{
					backgroundImage: 'url("..//img/MercedesGT.jpg")',
				}}
			>
				<div className="firstPageBox">
					<div className="content">
						<h1>Системи захисту автомобіля від викрадення </h1>
						<p>
							Серед автовласників поширена думка, що будь-яку систему захисту
							можна знешкодити і доля правди в цьому є. Але існує один нюанс –
							час витрачений на викрадення. Як правило, коли зловмисник бачить,
							що викрадення потребує більше зусиль і часу, ніж потрібно – це
							його демотивує і змушує відмовитись від спроби угону. Найкраще
							рішення для безпеки вашого автомобіля – це комплексний підхід з
							декількох контурів захисту і оповіщення. Завдяки великому досвіду
							наших спеціалістів у нас в Auto Safe Culture ми підбираємо
							індивідуальні рішення під ваш автомобіль та в залежності від
							побажань автовласника. Для економії свого часу Ви можете
							попередньо ознайомитися з сучасними системами захисту і порівняти
							їх.
						</p>
					</div>
					<button>Детальніше</button>
				</div>
			</div>
		</FullpageSection>
	);
};

export default ZahysnaPlivka;
