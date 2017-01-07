import {combineReducers } from "redux";
import { TEST } from "../action/action.jsx";

function value(state =[ ], action ){
	switch(action.type){
		case TEST:
			return action.value;
		default:
			return state;
	}
}

const  rootReducer = combineReducers({value});
export default rootReducer;