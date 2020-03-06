import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Nav from './components/nav'
import Mine from './pages/Mine'
import Home from './pages/Home'
import UserCenter from './pages/UserCenter'
import NotFound from './pages/NotFound'
import Render from './pages/Render'
import LinkOfRouter from './pages/LinkOfRouter'
import Shop from './pages/Shop'
import Book from './pages/Book'
import BookWeb from './pages/BookWeb'
import BookJava from './pages/BookJava'

function App() {
  /**
   * HashRouter:使用锚点链接的形式
   * BrowserRouter:使用H5的新特性 history.push 如果上线之后，需要后台做一些重定向处理，否则进入某个页面刷新之后会出现404的bug 
  */
  return (
    <Router>
      <Nav />
      <Switch>
        <Redirect from='/myhome' to='/' />
        <Route path="/" component={Home} exact></Route>
        <Route path="/mine/:id/:name" component={Mine} exact strict></Route>
        <Route path="/mine/usercenter/:id" component={UserCenter}></Route>
        <Route path="/link" component={LinkOfRouter}></Route>
        <Route path="/render" render={() => <div>render</div>}></Route>
        <Route path="/render2/:username?" render={(props) => <Render {...props} name="勒布朗"/>}></Route>
        <Route path="/shop" component={Shop}></Route>
        {/* <Route path="/book" component={Book}></Route> */}
        <Book>
          <Switch>
            <Route path="/book/web" component={BookWeb}></Route>
            <Route path="/book/java" component={BookJava}></Route>
          </Switch>
        </Book>
        <Route component={NotFound}></Route>
      </Switch>
      
    </Router>
  );
}

export default App;
