import { QuizState, QuizActions, QuizActionTypes } from '../types/IQuiz'

const initialState: QuizState = {
	open: false,
	step: 1
}

const quiz = (state = initialState, action: QuizActions) => {
	if (action.type === QuizActionTypes.SET_QUIZ_OPEN) {
		return {
			...state,
			open: action.payload
		}
	}

	if (action.type === QuizActionTypes.SET_QUIZ_STEP) {
		return {
			...state,
			step: action.payload
		}
	}

	return state
}

export default quiz