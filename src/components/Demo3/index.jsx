import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Topic = (props)=>{
    return (
        <div>
            <Comment/>
        </div>
    )
}

const Comment = (props,context)=>{
    return (
        <div>
            {context.color}
        </div>
    )
}

export default class Demo3 extends Component {

    getChildContext(){
        return {
            color:'red'
        }
    }

    render() {
        return (
            <div>
                <Topic color="red"/>
            </div>
        )
    }
}

Comment.contextTypes = {
    color:PropTypes.string
}

Demo3.childContextTypes = {
    color:PropTypes.string
}
