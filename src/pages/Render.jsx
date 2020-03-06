import React from 'react'

export default function Render(props) {
    console.log(props)
    return (
        <div>
            Render2 {props.name} + {props.match.params.username}
        </div>
    )
}
