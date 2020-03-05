import React from 'react'

export default function Render(props) {
    console.log(props)
    return (
        <div>
            Render {props.name}
        </div>
    )
}
