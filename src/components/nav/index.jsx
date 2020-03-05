import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <ul>
            <li>
                <Link to="/home">Home页面</Link>
            </li>
            <li>
                <Link to="/mine">Mine页面</Link>
            </li>
        </ul>
    )
}
