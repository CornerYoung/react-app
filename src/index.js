import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'

//创建store仓库
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)