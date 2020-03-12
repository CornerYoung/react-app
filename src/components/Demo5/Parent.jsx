import React, { Component } from 'react'
import Error from './Error'
import ErrorBundary from './ErrorBundary'

export default class Parent extends Component {
    state = {
        count:0
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <ErrorBundary render={(error,erroeInfo)=> <p>{"加载时发生错误"}</p>}>
                    <Error />
                </ErrorBundary>
                <button onClick={this.increment.bind(this)}>+</button>
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        )
    }
}
