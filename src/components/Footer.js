import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";

function Footer() {
	return (
		<FullpageSection>
			<div className="LastPagepage">
				<div className="CallBackBlock">
					<div className="LastBox">
						<div className="flex-box">
							<h1 className="mt-50">Зворотній звязок</h1>
							<div className="form__group field">
								<input
									type="input"
									className="form__field"
									placeholder="Name"
									required=""
								/>
								<label htmlFor="name" className="form__label">
									Ваше ім’я *
								</label>
							</div>
							<div className="form__group field">
								<input
									type="input"
									className="form__field"
									placeholder="Name"
									required=""
								/>
								<label htmlFor="name" className="form__label">
									Ваш телефон *
								</label>
							</div>
							<div className="form__group field">
								<input
									type="input"
									className="form__field"
									placeholder="Name"
									required=""
								/>
								<label htmlFor="name" className="form__label">
									Ел. пошта
								</label>
							</div>
							<div className="form__group field">
								<input
									type="input"
									className="form__field"
									placeholder="Name"
									required=""
								/>
								<label htmlFor="name" className="form__label">
									Коментар
								</label>
							</div>
							<button className="btn">Зворотній звязок</button>
						</div>
					</div>
				</div>
				<div className="footer">
					<div className="Box">
						<div className="textBox">
							<div className="conteinerFoot">
								<h1>Послуги</h1>
								<ul>
									<li>Шумо- вібро ізоляція </li>
									<li>Захист від викрадення</li>
									<li>Системи захисту з автозапуском</li>
									<li>Системи автомобільного захисту</li>
									<li>
										Системи автомобільної сигналізації без двох стороннього
										зв'язку
									</li>
									<li> Захисна плівка і тонування</li>
									<li>Детейлінг</li>
									<li>Імобілайзери</li>
									<li>Додаткові послуги</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FullpageSection>
	);
}

export default Footer;
