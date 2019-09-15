import React , { Component } from 'react'
import User from '../User'
import Button from '@material-ui/core/Button';

class Home extends Component{
constructor(props){
    super(props);
    this.state={
        userIds:[1,3,5],
        selectedUserId:null
    }
}

selectUser =(user_id)=> (e)=>{
    this.setState({
        selectedUserId:user_id
    })
}

deselectUser = ()=>{
    this.setState({
        selectedUserId:null
    })
}

render(){
    const { userIds, selectedUserId } = this.state;
    const users = userIds.map( userId => {
        return <div key={userId}><Button variant="contained" color="primary" onClick={this.selectUser(userId)} style={{margin:'5px'}}>{"User ID : "+userId}</Button></div>
    })
    return selectedUserId ? <User user_id={selectedUserId} back={this.deselectUser} /> : users
}
}

export default Home;