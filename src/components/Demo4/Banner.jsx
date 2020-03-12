import React from 'react'
import withFetch from './withFetch'

const Banner = withFetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')(props => {
    return (
        <h2>
            {props.data.banner[0].title}
        </h2>
    )
})

export default Banner
