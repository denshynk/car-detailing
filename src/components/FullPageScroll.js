import React from "react";
import Fullpage, {
	FullPageSections,
	FullpageSection,
	FullpageNavigation,
} from "@ap.cx/react-fullpage";

import ImageComponent from "./ImageComponent";
import { scroller } from "react-scroll";

const FullPageScroll = () => {
	const SectionStyle = {
		height: "100vh",
		width: "100%",
		display: "flex",
	};
	return (
		<>
			<Fullpage>
				<FullpageNavigation />
				<FullPageSections>
					<FullpageSection style={SectionStyle}>
						<div className="mainpage">
							<div className="centerBox">
								<p>Отримайте більше задоволення від Вашого авто разом з VVC</p>
								<h1>СУЧАСНА ДIТЕЙЛIНГ СТУДIЯ!</h1>
							</div>
						</div>
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<div className="secondpage">
							<div className="pageSlice mt-40">
								<h1>VVC - save and comfotr</h1>
								<ImageComponent />
							</div>
						</div>
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<div className="thirdpage">
							<div className="Box">
								<h1>Про компанiю</h1>
								<p>
									Місія нашої компанії полягає в тому, щоб забезпечувати нашим
									клієнтам реальну користь та надавати найкращий рівень сервісу
									та задоволеності у нашій сфері.
								</p>
								<p>
									Ми прагнемо до переваг у всьому, що робимо, і наша мета –
									стати надійним партнером для всіх наших клієнтів.
								</p>
								<p>
									З 2019 року ми зробили комфортніше і безпечніше понад 17500
									автомобілів і практично всі їхні власники залишилися дуже
									задоволені.
								</p>
								<p>
									Для вас: Гарантія 5 років Збереження гарантії дилера Підтримка
									на весь період експлуатації Безпека та комфорт Вашого
									автомобіля – наша турбота!
								</p>
							</div>
						</div>
					</FullpageSection>
					<FullpageSection style={SectionStyle}>
						<div className="LastPagepage">
							<div className="CallBackBlock">
								<div className="Box">
									<h1 className="mt-50">Зворотній звязок</h1>
									<div class="form__group field">
										<input
											type="input"
											class="form__field"
											placeholder="Name"
											required=""
										/>
										<label for="name" class="form__label">
											Ваше ім’я *
										</label>
									</div>
									<div class="form__group field">
										<input
											type="input"
											class="form__field"
											placeholder="Name"
											required=""
										/>
										<label for="name" class="form__label">
											Ваш телефон *
										</label>
									</div>
									<div class="form__group field">
										<input
											type="input"
											class="form__field"
											placeholder="Name"
											required=""
										/>
										<label for="name" class="form__label">
											Ел. пошта
										</label>
									</div>
									<div class="form__group field">
										<input
											type="input"
											class="form__field"
											placeholder="Name"
											required=""
										/>
										<label for="name" class="form__label">
											Коментар
										</label>
									</div>
									<button class="btn">Зворотній звязок</button>
								</div>
							</div>
							<div className="footer">
								<div className="Box">Про компанiю</div>
							</div>
						</div>
					</FullpageSection>
				</FullPageSections>
			</Fullpage>
		</>
	);
};

export default FullPageScroll;
