import React from 'react';
import api from './api'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      chengpinList:[]
    }
  }

  componentDidMount(){
    api.getChengpin()
    .then(res => res.json())
    .then(data => {
      this.setState({
        chengpinList: data.chengpinInfo
      })
    })

    api.postLogin({
      user_id:'iwen@qq.com',
      password:'iwen123',
      verification_code:'crfvw'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
 
  render(){
    return (
      <ul>
        {
          this.state.chengpinList.map((element,index)=>{
            return (
              <li key={element+index}>
                <h2>{element.title}</h2>
                <p>{element.content}</p>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default App;
