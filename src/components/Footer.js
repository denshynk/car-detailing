import React from "react";
import { FullpageSection } from "@ap.cx/react-fullpage";

function Footer() {
	const [formData, setFormData] = React.useState({
		firstName: "",
		phoneNumber: "",
		email: "",
		coment: "",
	});

	const handleChange = (e) => {
		const { placeholder, value } = e.target;
		setFormData({ ...formData, [placeholder]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.phoneNumber && formData.firstName) {
			try {
				// Отправка данных на сервер
				const response = await fetch("YOUR_SERVER_ENDPOINT", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				// Проверка статуса ответа
				if (response.ok) {
					// Если запрос прошел успешно, очистите поля формы
					setFormData({
						firstName: "",
						phoneNumber: "",
						email: "",
						coment: "",
					});
					alert("Данные успешно отправлены!");
				} else {
					alert("Произошла ошибка при отправке данных на сервер.");
				}
			} catch (error) {
				console.error("Ошибка при отправке данных на сервер:", error);
				alert("Произошла ошибка при отправке данных на сервер.");
			}
		} else {
			alert(
				"Пожалуйста, заполните все поля, или проверьте правильность написанного номера. Записывайте номер с +380"
			);
		}
	};
	console.log(formData);

	return (
		<FullpageSection>
			<div className="LastPagepage">
				<div className="CallBackBlock">
					<div className="LastBox">
						<div className="flex-box">
							<h1 className="mt-50">Зворотній звязок</h1>
							<div className="form__group field">
								<input
									type="text"
									className="form__field"
									placeholder="firstName"
									required=""
									value={formData.firstName}
									onChange={handleChange}
								/>
								<label htmlFor="name" className="form__label">
									Ваше ім’я *
								</label>
							</div>
							<div className="form__group field">
								<input
									type="text"
									className="form__field"
									placeholder="phoneNumber"
									required=""
									onChange={handleChange}
								/>
								<label htmlFor="name" className="form__label">
									Ваш телефон *
								</label>
							</div>
							<div className="form__group field">
								<input
									type="text"
									className="form__field"
									placeholder="email"
									required=""
									onChange={handleChange}
								/>
								<label htmlFor="name" className="form__label">
									Ел. пошта
								</label>
							</div>
							<div className="form__group field">
								<input
									type="input"
									className="form__field"
									placeholder="coment"
									required=""
									onChange={handleChange}
								/>
								<label htmlFor="name" className="form__label">
									Коментар
								</label>
							</div>
							<button className="btn" onClick={handleSubmit}>
								Зворотній звязок
							</button>
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
