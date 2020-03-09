import * as actions from '../constants'
// export const increment = (num) => {
//     return {
//         type:actions.INCREMENT,
//         num
//     }
// }
export const increment = (num) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type: actions.INCREMENT,
                num
            })
        },1000)
    }
}

export const decrement = (num) => {
    return {
        type:actions.DECREMENT,
        num
    }
}