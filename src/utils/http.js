/**
 * get post
*/
const qs = require('querystring')

export function httpGet(url){
    // const result = fetch(url)
    // return result
    return fetch(url)
}

export function httpPost(url,params){
    return fetch(url,{
        method:'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json,text/plain,*/*'
        },
        body:qs.stringify(params)
    })
}