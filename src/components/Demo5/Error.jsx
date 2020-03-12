import React from 'react'

export default function Error() {
    return (
        <div>
            {
                null.map((element, index) => {
                    return <li>{element}</li>
                })
            }
        </div>
    )
}
