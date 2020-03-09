import * as actions from '../constants'
export const increment = (num) => {
    return {
        type:actions.INCREMENT,
        num
    }
}

export const decrement = (num) => {
    return {
        type:actions.DECREMENT,
        num
    }
}