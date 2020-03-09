import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as counterActions from './actions/counter'
import {bindActionCreators} from 'redux'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => { this.props.counterActions.increment(10) }} className="btn btn-info">increment</button>
          <button onClick={() => { this.props.counterActions.decrement(5) }} className="btn btn-success">decrement</button>
        </p>
        <User />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter:state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    counterActions:bindActionCreators(counterActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
