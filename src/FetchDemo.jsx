import React, { Component } from 'react'

export default class FetchDemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            banners:[]
        }
    }
    componentDidMount(){
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                banners:data.banner
            })
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
