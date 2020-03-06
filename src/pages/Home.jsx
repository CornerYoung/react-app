import React from 'react'
import querystring from 'querystring'

export default function Home(props) {
    const params = new URLSearchParams(props.location.search)
    console.log(params.get('user'), params.get('age'))
    const value = querystring.parse(props.location.search)
    console.log(value)
    return (
        <div>
            Home
        </div>
    )
}
