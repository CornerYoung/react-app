import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import rootReducer from './reducers'
import App from './App'

//中间件
// const logger = store => next => action => {
//     console.log('dispatch->',action)
//     let result = next(action) //加载下一个中间件
//     console.log('next state->',store.getState())
//     return result
// }

// const error = store => next => action => {
//     try{
//         next(action)
//     }catch(err){
//         console.log('error: ',err)
//     }
// }

//创建store仓库
// const store = createStore(rootReducer, {}, applyMiddleware(logger, error))
const store = createStore(rootReducer, {}, applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)