import { FETCH_USER_SUCCESS} from '../constants'

const initialState = {
    user:{}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
        //三大原则之一：State是只读的，唯一改变State的方法是触发action，action是用于描述已发生事件的普通对象
            return {
                user:action.user
            }
        default:
            return state
    }
}

export default user