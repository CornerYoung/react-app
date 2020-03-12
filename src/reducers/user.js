import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST} from '../constants'

const initialState = {
    user:{},
    isFetching:false,
    error:null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
        //三大原则之一：State是只读的，唯一改变State的方法是触发action，action是用于描述已发生事件的普通对象
            return {
                user:action.user,
                isFetching: false,
                error: null
            }
        case FETCH_USER_FAILURE:
            return {
                user:{},
                isFetching: false,
                error: action.error
            }
        case FETCH_USER_REQUEST:
            return {
                user: {},
                isFetching:true,
                error:null
            }
        default:
            return state
    }
}

export default user