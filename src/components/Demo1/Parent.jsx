import React, { Component } from 'react'

/**
 * 计数例子
 * 
 * 定时器
 * 网络请求
 * 事件监听
 *  在组件被销毁前，都应得到相应处理
*/

const MyAPI = {
    count:0,
    subscribe(cb){
        this.timeId = setInterval(()=>{
            this.count += 1
            cb(this.count)
        },1000)
    },
    unSubscribe(){
        clearInterval(this.timeId)
        this.reset()
    },
    reset(){
        this.count = 0
    }
}

export default class Parent extends Component {
    state = {
        count:0
    }

    componentDidMount() {
        MyAPI.subscribe((currentCount)=>{
            this.setState({
                count: currentCount
            })
        })
    }

    componentWillUnmount(){
        MyAPI.unSubscribe()
    }

    render() {
        return (
            <div>
                Parent:{this.state.count}
            </div>
        )
    }
}
