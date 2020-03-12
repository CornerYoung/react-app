import React, { Component,Fragment } from 'react'

class Item extends Component {
    render() {
        return (
            <Fragment>
                <li>demo2</li>
                <li>demo2 demo2</li>
            </Fragment>
        )
    }
}

export default class Demo2 extends Component {
    render() {
        return (
            <ul>
                <Item />
            </ul>
        )
    }
}
