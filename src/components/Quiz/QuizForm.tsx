import React from 'react'
import { useDispatch } from 'react-redux'
import { InjectedFormProps, formValueSelector, reduxForm, Field } from 'redux-form'
import { createTextMask } from "redux-form-input-masks";

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { setCurrentStepQuiz } from '../../redux/actions/quiz'

import { RenderRadio, RenderCheckbox } from '../'

import Love from '../../assets/images/love.jpg'

const QuizForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	pristine,
	submitting,
}) => {
	const rates: { [key: string]: { subtitle: string, title: string } } = {
		"3": {
			subtitle: "3 часа каждый день",
			title: "6300₽"
		},
		"6": {
			subtitle: "6 часов каждый день",
			title: "12 600₽"
		},
		"9": {
			subtitle: "9 часов каждый день",
			title: "18 900₽"
		},
		"24": {
			subtitle: "24 часа каждый день",
			title: "20 900₽"
		}
	}

	const dispatch = useDispatch()

	const { step } = useTypedSelector(({ quiz }) => quiz)

	const [isTransitionStep, setIsTransitionStep] = React.useState<boolean>(false)

	const [currentRate, setCurrentRate] = React.useState<string>("")
	const [isCompletePhone, setIsCompletePhone] = React.useState<boolean>(false)

	const selector = formValueSelector("quiz-form");

	const values =
		useTypedSelector((state) => {
			const values = selector(
				state,
				"type",
				"addService",
				"startDay"
			);
			return values;
		});

	const onClickSetStep = (step: number) => {
		setIsTransitionStep(true)

		setTimeout(() => {
			dispatch(setCurrentStepQuiz(step))
			setIsTransitionStep(false)
		}, 300)
	}

	return (
		<form onSubmit={handleSubmit} className={`quiz-content-form ${step > 1 ? "h620" : "h520"}`}>
			<img src={Love} alt="" className='quiz-content-form-text__image' style={{display: "none"}} />

			{step === 1 ? (
				<div className={`quiz-content-form-text ${isTransitionStep ? "isClose" : ""}`}>
					<h3 className="quiz-content-form-text__title">
						Чтобы понять конечную стоимость услуги, нам нужно понять, чего вы хотите.
						<br />
						О ком вы хотите позаботиться?
					</h3>

					<div className="quiz-content-form-text-checkbox-wrapper">
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='За родным с ограниченными возможностями'
								value='За родным с ограниченными возможностями'
								name='type'
								type="radio"
							/>
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='За пожилым родным'
								value='За пожилым родным'
								name='type'
								type="radio"
							/>
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='За пожилым родным с ограниченными возможностями'
								value='За пожилым родным с ограниченными возможностями'
								name='type'
								type="radio"
							/>
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Другое'
								value='Другое'
								name='type'
								type="radio"
							/>
						</div>
					</div>

					<div className="quiz-content-form-text-btn">
						<button className={`btn small ${values?.type ? "" : "disabled"} quiz-content-form-text-btn__btn`} type="button" onClick={() => onClickSetStep(step + 1)}>
							Далее
						</button>
					</div>
				</div>
			) : (
				null
			)}

			{step === 2 ? (
				<div className={`quiz-content-form-text ${isTransitionStep ? "isClose" : ""}`}>
					<h3 className="quiz-content-form-text__title">
						Какие дополнительные активности вы хотите?
						<br />
						Можете выбрать несколько вариантов ответа.
					</h3>

					<div className="quiz-content-form-text-checkbox-wrapper">
						<div className="quiz-content-form-text-checkbox">
							<Field component={RenderCheckbox} label='Массаж' type="checkbox" name='addService.massage' />
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field component={RenderCheckbox} label='Прогулка' type="checkbox" name='addService.walk' />
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field component={RenderCheckbox} label='Чтение в слух' type="checkbox" name='addService.read' />
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field component={RenderCheckbox} label='Готовка' type="checkbox" name='addService.kitchen' />
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field component={RenderCheckbox} label='Уборка' type="checkbox" name='addService.cleaning' />
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field component={RenderCheckbox} label='Покупка продуктов' type="checkbox" name='addService.buy_products' />
						</div>

						<div className="quiz-content-form-text-checkbox">
							<Field component={RenderCheckbox} label='Поход в поликлинику' type="checkbox" name='addService.polyclinic' />
						</div>
					</div>

					<div className="quiz-content-form-text-btn">
						<button className="btn gray small quiz-content-form-text-btn__back" type="button" onClick={() => onClickSetStep(step - 1)}>
							Назад
						</button>

						<button
							className={
								`btn small ${values?.addService && Object.keys(values.addService).length && Object.keys(values.addService).filter(key => values.addService[key] === true).length ? "" : "disabled"} quiz-content-form-text-btn__btn`
							}
							type="button"
							onClick={() => onClickSetStep(step + 1)}>
							Далее
						</button>
					</div>
				</div>
			) : (
				null
			)}

			{step === 3 ? (
				<div className={`quiz-content-form-text ${isTransitionStep ? "isClose" : ""}`}>
					<h3 className="quiz-content-form-text__title">
						Выберете день, когда нужно начать заботиться
					</h3>

					<div className="quiz-content-form-text-checkbox-wrapper">
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Понедельник'
								value='Понедельник'
								type="radio"
								name='startDay'
							/>
						</div>
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Вторник'
								value='Вторник'
								type="radio"
								name='startDay'
							/>
						</div>
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Среда'
								value='Среда'
								type="radio"
								name='startDay'
							/>
						</div>
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Четверг'
								value='Четверг'
								type="radio"
								name='startDay'
							/>
						</div>
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Пятница'
								value='Пятница'
								type="radio"
								name='startDay'
							/>
						</div>
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Суббота'
								value='Суббота'
								type="radio"
								name='startDay'
							/>
						</div>
						<div className="quiz-content-form-text-checkbox">
							<Field
								component={RenderRadio}
								label='Воскресенье'
								value='Воскресенье'
								type="radio"
								name='startDay'
							/>
						</div>
					</div>

					<div className="quiz-content-form-text-btn">
						<button className="btn gray small quiz-content-form-text-btn__back" type="button" onClick={() => onClickSetStep(step - 1)}>
							Назад
						</button>

						<button className={`btn small ${values?.startDay ? "" : "disabled"} quiz-content-form-text-btn__btn`} type="button" onClick={() => onClickSetStep(step + 1)}>
							Далее
						</button>
					</div>
				</div>
			) : (
				null
			)}

			{step === 4 ? (
				<div className={`quiz-content-form-text ${isTransitionStep ? "isClose" : ""}`}>
					<h3 className="quiz-content-form-text__title">
						Мы рассчитали стоимость заботы о вашем близком. Теперь вам нужно выбрать подходящий формат времени
					</h3>

					<div className="quiz-content-form-text-prices">
						{Object.keys(rates).map((rate, index) => (
							<div
								className={`quiz-content-form-text-prices-block ${currentRate === rate ? "active" : ""}`}
								key={`quiz-content-form-text-prices-block-${index}`}
								onClick={() => setCurrentRate(rate)}
							>
								<p className="quiz-content-form-text-prices-block__subtitle">
									{rates[rate].subtitle}
								</p>

								<p className="quiz-content-form-text-prices-block__title">
									{rates[rate].title} <span>в неделю</span>
								</p>

								<button className="quiz-content-form-text-prices-block__btn" >
									{currentRate === rate ? "Выбрано" : "Выбрать"}
								</button>
							</div>
						))}

					</div>

					<div className="quiz-content-form-text-btn">
						<button className="btn gray small quiz-content-form-text-btn__back" type="button" onClick={() => onClickSetStep(step - 1)}>
							Назад
						</button>

						<button className={`btn small ${currentRate !== "" ? "" : "disabled"} quiz-content-form-text-btn__btn`} type="button" onClick={() => onClickSetStep(step + 1)}>
							Далее
						</button>
					</div>
				</div>
			) : (
				null
			)}

			{step === 5 ? (
				<div className={`quiz-content-form-text ${isTransitionStep ? "isClose" : ""}`}>
					<div className="quiz-content-form-text-wrapper">
						<h3 className="quiz-content-form-text__title">
							Вы выбрали тариф <span>{rates[currentRate].subtitle}</span>
						</h3>

						<div className="quiz-content-form-text-description">
							<p className="quiz-content-form-text-description__description">
								Теперь оставьте свои контактные данные, чтобы договорится о встрече
							</p>

							<p className="quiz-content-form-text-description__description">
								Напишите свой номер телефона, <span>мы не будем вам звонить</span>, а свяжемся с вами в мессенджере для согласования даты и места встречи.
							</p>
						</div>

						<div className="quiz-content-form-text-phone">
							<Field
								component="input"
								name="phone"
								className={`quiz-content-form-text-phone__input ${isCompletePhone ? "complete" : ""}`}
								{...createTextMask({
									pattern: "+7 999 999 99-99",
									guide: false,
									stripMask: false,
									onChange: () => {
										setIsCompletePhone(false)
									},
									onCompletePattern: () => {
										setIsCompletePhone(true)
									}
								})}
							/>

							<button className={`quiz-content-form-text-phone__btn ${isCompletePhone ? "active" : ""}`} type='button' onClick={() => onClickSetStep(step + 1)}>
								Оставить
								<svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807612 21.9792 0.807612 21.3934 1.3934C20.8076 1.97918 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM2 13.5H32V10.5H2V13.5Z" fill="white" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			) : (
				null
			)}

			{step === 6 ? (
				<div className={`quiz-content-form-text ${isTransitionStep ? "isClose" : ""}`}>
					<div className="quiz-content-form-text-wrapper">
						<img src={Love} alt="" className='quiz-content-form-text__image' />

						<h3 className="quiz-content-form-text__title">
							Спасибо, что оставили свой телефон и нажали кнопку оплатить. Наш сервис находится в стадии разработки, и ваш интерес поможет быстрее его сделать.
						</h3>
						<div className="quiz-content-form-text-description">
							<p className="quiz-content-form-text-description__description">
								Сейчас мы не можем предоставить специалиста заботы, но сразу свяжемся с вами, когда будем готовы.
							</p>
						</div>
					</div>
				</div>
			) : (
				null
			)}
		</form>
	)
}


export default reduxForm<{}, {}>({
	form: "quiz-form",
	// validate,
})(QuizForm);