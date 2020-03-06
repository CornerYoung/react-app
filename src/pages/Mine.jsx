import React from 'react'
import MineItem from './MineItem'

export default function Mine(props) {
    return (
        <div>
            Mine : {props.match.params.id}--{props.match.params.name}
            <MineItem />
        </div>
    )
}
