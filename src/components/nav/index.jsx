import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">Home页面</Link>
            </li>
            <li>
                <Link to="/mine/123456/Lee">Mine页面</Link>
            </li>
            <li>
                <Link to="/render">render页面</Link>
            </li>
            <li>
                <Link to="/render2">render2页面</Link>
            </li>
            <li>
                <Link 
                    to="/mine/usercenter"
                >
                    UserCenter页面
                </Link>
            </li>
            <li>
                <Link 
                    to={{
                        pathname:"/link",
                        search: "?sort=name",
                        hash: "#the-hash",
                        state: { fromDashboard: true }
                    }}
                >link页面</Link>
            </li>
        </ul>
    )
}
