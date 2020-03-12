import React, { PureComponent } from 'react'

export default class Child1 extends PureComponent {
    render() {
        return (
            <div>
                Child1:{this.props.num}
            </div>
        )
    }
}
