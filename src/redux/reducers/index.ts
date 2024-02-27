import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import quiz from "./quiz";

export const rootReducer = combineReducers({
	form: formReducer,
	quiz
});

export type RootState = ReturnType<typeof rootReducer>;
