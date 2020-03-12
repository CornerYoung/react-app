import React, { Component } from 'react'

export default class Child extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.num === nextState){
            return false
        }else{
            return true
        }
    }
    

    render() {
        return (
            <div>
                Child:{this.props.num}
            </div>
        )
    }
}
