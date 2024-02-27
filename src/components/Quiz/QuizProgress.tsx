import React from 'react'
import CountUp from 'react-countup'

import { useTypedSelector } from '../../hooks/useTypedSelector'

const QuizProgress: React.FC = () => {
	const { step } = useTypedSelector(({ quiz }) => quiz)

	return (
		<div className="quiz-content-progress">
			<p className="quiz-content-progress__subtitle">
				Уже заполнено
			</p>

			<h4 className="quiz-content-progress__title">
				<CountUp end={((step - 1) / 5) * 100 > 100 ? 100 : ((step - 1) / 5) * 100} duration={.5} />%
			</h4>

			<div className="quiz-content-progress-bar">
				<div className="quiz-content-progress-bar-active" style={{ width: `${((step - 1) / 5) * 100}%` }}></div>
				<div className="quiz-content-progress-bar-subactive" style={{ width: `${(((step - 1) + 1) / 5) * 100}%` }}></div>
			</div>
		</div>
	)
}

export default QuizProgress