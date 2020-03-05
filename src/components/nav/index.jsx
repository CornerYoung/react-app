import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">Home页面</Link>
            </li>
            <li>
                <Link to="/mine">Mine页面</Link>
            </li>
            <li>
                <Link to="/render">render页面</Link>
            </li>
            <li>
                <Link to="/render2">render2页面</Link>
            </li>
            <li>
                <Link to="/mine/usercenter">UserCenter页面</Link>
            </li>
        </ul>
    )
}
