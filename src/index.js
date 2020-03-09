import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reducers/counter'
import App from './App'

//创建store仓库
const store = createStore(reducer)
// store.subscribe(()=>console.log(store.getState()))

const render = ()=>{
    ReactDOM.render(
        <App
            onIncrement={() => store.dispatch({ type: "INCREMENT" })}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}
            value={store.getState()}
        />,
        document.getElementById('root')
    )
}
render();
store.subscribe(render)

