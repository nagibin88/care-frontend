export interface QuizState {
	open: boolean
	step: number
}

export enum QuizActionTypes {
	SET_QUIZ_OPEN = "SET_QUIZ_OPEN",
	SET_QUIZ_STEP = "SET_QUIZ_STEP"
}

interface setQuizOpen {
	type: QuizActionTypes.SET_QUIZ_OPEN,
	payload: boolean
}

interface setQuizStep {
	type: QuizActionTypes.SET_QUIZ_STEP,
	payload: number
}

export type QuizActions = setQuizOpen | setQuizStep