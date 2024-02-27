import React from 'react'

import { QuizForm, QuizProgress } from '../'

const Quiz: React.FC = () => {
	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<div className='quiz'>
			<div className="container quiz-content">
				<QuizForm onSubmit={onSubmit} />

				<QuizProgress />
			</div>
		</div>
	)
}

export default Quiz