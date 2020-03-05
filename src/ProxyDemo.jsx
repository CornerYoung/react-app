import React, { Component } from 'react'

//http://yunp.top:9000/blog/index.php
//http://tingapi.ting.baidu.com/v1/restserver/ting？method=baidu.ting.billboard.billList&type=1&size=10&offset=0

export default class ProxyDemo extends Component {
    /**
     * 跨域解决方案：
     * 1."proxy": "http://tingapi.ting.baidu.com" 修改package.json配置文件
     * 
     * 2.yarn add http-proxy-middleware
     *   create src/setupProxy.js
     */
    componentDidMount(){
        fetch('/v1/restserver/ting？method=baidu.ting.billboard.billList&type=1&size=10&offset=0')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(new Error(error));
        })

        fetch('/api/list')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h1>fetch-跨域解决方案</h1>
            </div>
        )
    }
}
