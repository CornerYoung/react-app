import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
        <p className="text-center">
          <button onClick={this.props.onIncrement} className="btn btn-info">increment</button>
          <button onClick={this.props.onDecrement} className="btn btn-success">decrement</button>
        </p>
      </div>
    );
  }
}

export default App;
