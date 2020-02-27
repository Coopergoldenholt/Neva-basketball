import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import inGameStatsReducer from "./inGameStatsReducer";
import userReducer from "./userReducer";
import statReducer from "./statReducer";

const rootReducer = combineReducers({
	user: userReducer,
	inGameStats: inGameStatsReducer,
	stats: statReducer
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(promiseMiddleware))
);

export default store;
