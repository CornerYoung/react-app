import React, { Component } from 'react';
import {connect} from 'react-redux'
import { increment, decrement } from './actions/counter'

class App extends Component {
  render() {
    console.log(this.props);
    const { increment,decrement} =this.props
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => { increment() }} className="btn btn-info">increment</button>
          <button onClick={() => { decrement() }} className="btn btn-success">decrement</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => { dispatch(increment())},
    decrement: () => { dispatch(decrement())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
