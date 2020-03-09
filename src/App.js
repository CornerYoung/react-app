import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as counterActions from './actions/counter'
import {bindActionCreators} from 'redux'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          {/* <button onClick={() => { increment() }} className="btn btn-info">increment</button>
          <button onClick={() => { decrement() }} className="btn btn-success">decrement</button> */}
          <button onClick={() => { this.props.counterActions.increment(10) }} className="btn btn-info">increment</button>
          <button onClick={() => { this.props.counterActions.decrement(5) }} className="btn btn-success">decrement</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter:state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => { dispatch(increment())},
//     decrement: () => { dispatch(decrement())}
//   }
// }
 
const mapDispatchToProps = (dispatch) => {
  return {
    counterActions:bindActionCreators(counterActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
