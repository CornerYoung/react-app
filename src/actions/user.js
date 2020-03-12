import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST} from '../constants'

export function fetch_user_failure(error){
    return {
        type: FETCH_USER_FAILURE,
        error
    }
}

export function fetch_user(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user
    }
}

export function fetch_user_request(user) {
    return {
        type: FETCH_USER_REQUEST,
        user
    }
}

export const get_user = () => {
    return dispatch => {
        dispatch(fetch_user_request())
        fetch('http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php')
        .then(res => res.json())
        .then(data => {
            dispatch(fetch_user(data.chengpinDetails[0]))
        })
        .catch(error => {
            fetch_user_failure(error)
        }) 
    }
}