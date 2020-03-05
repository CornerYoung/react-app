import React, { Component } from 'react'
import qs from 'querystring'

export default class FetchDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            banners:[]
        }
    }
    componentDidMount(){
        /**
         * fetch get请求
        */
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        .then(res => res.json())
        .then(data=>{
            this.setState({
                banners:data.banner
            })
        })

        /**
         * fetch post请求
        */
        fetch('http://iwenwiki.com/api/blueberrypai/login.php', {
            method:'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept':'application/json,text/plain,*/*'
            },
            body: qs.stringify({
                user_id: 'iwen@qq.com',
                password: 'iwen123',
                verification_code: 'crfvw'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            throw new Error(error) 
        })
    }
    render() {
        return (
            <div>
                <h2>FetchDemo</h2>
                <ul>
                    {
                        this.state.banners.map((item,i)=>{
                            return (
                                <li key={item+i}>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
