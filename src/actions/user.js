import { FETCH_USER_SUCCESS} from '../constants'

export function fetch_user(user){
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}

export const get_user = () => {
    return dispatch => {
        fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
        .then(res => res.json())
        .then(data => {
            dispatch(fetch_user(data.chengpinDetails[0]))
        })
        .catch(error => {
            console.log(error)
        }) 
    }
}