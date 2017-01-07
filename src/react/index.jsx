import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import { Provider } from "react-redux"
import Counter from './component/Counter.jsx'
import rootReducer from './reducer/reducer.jsx'

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer);

const rootEl = document.getElementById('root');

ReactDOM.render(
		<Provider store={ store }>
			<Counter />
		</Provider>,
		rootEl
);