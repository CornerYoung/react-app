import React from 'react'

export default function NotFound(props) {
    const goBackHome = ()=>{
        //push是叠加 replace是替换
        //props.history.push('/')
        props.history.replace('/')
    }
    return (
        <div>
            页面被意大利炮轰走了···
            <button onClick={goBackHome}>返回</button>
        </div>
    )
}
