import React from 'react'

export default function Book(props) {
    return (
        <div>
            book
            {/* 路由嵌套显示的位置 */}
            {props.children}
        </div>
    )
}
