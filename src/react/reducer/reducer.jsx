import {combineReducers } from "redux";
import { TEST } from "../action/action.jsx";

function value(state =[ ], action ){
	console.log(action);
	switch(action.type){
		case TEST:
			return action.value;
		default://返回默认值,一开始就会执行
			return 1111;
	}
}

const  rootReducer = combineReducers({value});
//function reducer(state = {}, action) { return { value: state.value } };

export default rootReducer;