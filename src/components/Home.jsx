import React from 'react'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Banner from './Demo4/Banner'
import Chengpin from './Demo4/Chengpin'
import Demo5 from './Demo5/Parent'

export default function Home() {
    return (
        <div>
            <Demo2 />
            <Demo3 />
            <Banner />
            <Chengpin />
            <Demo5/>
        </div>
    )
}
