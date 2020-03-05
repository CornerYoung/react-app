import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Mine from './pages/Mine'
import Home from './pages/Home'

function App() {
  /**
   * HashRouter:使用锚点链接的形式
   * BrowserRouter:使用H5的新特性 history.push 如果上线之后，需要后台做一些重定向处理，否则进入某个页面刷新之后会出现404的bug
  */
  return (
    <Router>
      <Route path="/home" component={Home}></Route>
      <Route path="/mine" component={Mine}></Route>
    </Router>
  );
}

export default App;
