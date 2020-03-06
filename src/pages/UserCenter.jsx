import React from 'react'

export default function UserCenter(props) {
    return (
        <div>
            UserCenterID : {props.match.params.id}
        </div>
    )
}
