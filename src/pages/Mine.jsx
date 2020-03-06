import React from 'react'

export default function Mine(props) {
    return (
        <div>
            Mine : {props.match.params.id}--{props.match.params.name}
        </div>
    )
}
