import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './components/nav'
import Mine from './pages/Mine'
import Home from './pages/Home'
import UserCenter from './pages/UserCenter'
import NotFound from './pages/NotFound'

function App() {
  /**
   * HashRouter:使用锚点链接的形式
   * BrowserRouter:使用H5的新特性 history.push 如果上线之后，需要后台做一些重定向处理，否则进入某个页面刷新之后会出现404的bug 
  */
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/mine" component={Mine} exact strict></Route>
        <Route path="/mine/usercenter" component={UserCenter}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      
    </Router>
  );
}

export default App;
