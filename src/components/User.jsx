import React, { Component } from 'react'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import * as userActions from '../actions/user'

class User extends Component {
    render() {
        const {user,isFetching,error} = this.props.user
        let data
        if(error){
            data = error
        }else if(isFetching){
            data = 'Loading...'
        }else{
            data = user.title
        }
        return (
            <div className="container text-center">
                <p className="text-center">{data}</p>
                <p className="text-center">User</p>
                <button onClick={() => { this.props.userActions.get_user()}} className="btn btn-primary">点击获取</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
