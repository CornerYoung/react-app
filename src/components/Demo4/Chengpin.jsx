import React from 'react'
import withFetch from './withFetch'

const Chengpin = withFetch('http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php')(props => {
    return (
        <h3>
            {props.data.chengpinInfo[0].title}
        </h3>
    )
})

export default Chengpin
