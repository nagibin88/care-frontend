import { QuizActionTypes } from '../types/IQuiz'

export const setOpenQuiz = (status: boolean) => ({
	type: QuizActionTypes.SET_QUIZ_OPEN,
	payload: status
})

export const setCurrentStepQuiz = (step: number) => ({
	type: QuizActionTypes.SET_QUIZ_STEP,
	payload: step
})