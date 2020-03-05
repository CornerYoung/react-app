import base from './base'
import { httpGet, httpPost} from '../utils/http'

/**
 * 后期网络请求一次性全部看到
*/
const api = {
    getChengpin(){
        return httpGet(base.ownUrl+base.chengpin)
    },
    postLogin(params){
        return httpPost(base.ownUrl+base.login,params)
    }
}

export default api