import React, { Component } from 'react'
import { Redirect } from "react-router-dom"

export default class Shop extends Component {
    state = {
        isLogin: true
    }

    render() {
        const { isLogin} = this.state
        return (
            <div>
                {
                    isLogin ? <h2>shop</h2> : <Redirect to="/" />
                }
            </div>
        )
    }
}
