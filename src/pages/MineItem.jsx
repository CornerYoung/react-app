import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class MineItem extends Component {
    /**
     * 当前组件没有直接被路由管理，所以没有路由对象
     * 
     * 使用高阶组件 withRouter
    */
    goBackHome(){
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <button onClick={this.goBackHome.bind(this)}>MineItem返回Home</button>
            </div>
        );
    }
}

export default withRouter(MineItem)