import React, { Component } from 'react'

export default class ErrorBundary extends Component {
    state = {
        hasError:false,
        error:null,
        errorInfo:null
    }

    componentDidCatch(error,errorInfo){
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        if(this.state.hasError){
            return (
                <div>
                    {
                        this.props.render(this.state.error,this.state.errorInfo)
                    }
                </div>
            )
        }
        return this.props.children
    }
}
