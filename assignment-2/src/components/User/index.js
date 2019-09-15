import React, { Component } from 'react';
import {  getPostsByUserId, addPost } from '../../services/posts'
import {  getTodosByUserId, addTodo } from '../../services/todos'
import { getUserById } from '../../services/users'
import { minmax } from './helpers'
import Button from '@material-ui/core/Button';
import Todos from '../Todos'
import Posts from '../Posts'
import Loader from '../UI/Loader'
import CustomizedSnackbars from '../UI/SnackBarMsg'
import UserCard from '../User/UserCard'
// import { withRouter } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            todos: [],
            showTodos: false,
            showPosts: false,
            showUser: true,
            smallTitleTodo: null,
            longTitleTodo: null,
            smallTitlePost: null,
            longTitlePost: null,
            smallBodyPost: null,
            longBodyPost: null,
            loading: false,
            openSnack : false,
            msgSnack : '',
            snackType : "",
            user:null
        }
    }

    componentDidMount() {
        
        getUserById(this.props.user_id).then(user => {
            this.setState({
            user,
            //loading:false
        })
        getPostsByUserId(this.props.user_id).then((posts) => {
            this.setState({
                posts
            })
        });
        getTodosByUserId(this.props.user_id).then(todos => {
            this.setState({
                todos
            })
        });
        })
    }
    // Records a post for a user
    insertPost = (post) => {
        this.setState({
            loading: true
        })
        addPost(post).then(post => {
            let posts = [...this.state.posts]
            posts.push(post)
            this.setState({
                ...this.state,
                posts,
                loading: false,
                openSnack:true,msgSnack:"post added successfully",snackType:"success"
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                ...this.state,
                loading: false,
                openSnack:true,msgSnack:"sorry couldn't add post details. Something went wrong",snackType:"error"
            })
        });
    }
    // Records a todo for a user
    insertTodo = (todo) => {
        this.setState({
            loading: true
        })
        addTodo(todo).then(todo => {
            let todos = [...this.state.todos];
            todos.push(todo);
            this.setState({
                ...this.state,
                todos,
                loading: false,
                openSnack:true,msgSnack:"todo added successfully",snackType:"success"
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                ...this.state,
                loading: false,
                openSnack:true,msgSnack:"sorry couldn't add todo details. Something went wrong",snackType:"error"
            })
        });
    }
    // Show the post where the body text has smallest length for the user
    showSmallestPostByBody = () => {
        let smallestPost = minmax([...this.state.posts], "body","min")
        this.setState({ smallBodyPost: smallestPost });
    }
    // Show the post where the body text has longest length for the user
    showLongestPostByBody = () => {
        let longestPost = minmax([...this.state.posts], "body","max")
        this.setState({ longBodyPost: longestPost});
    }
    // Show the post where the title text has  smallest length for the user
    showSmallestPostByTitle = () => {
        let smallestPost = minmax([...this.state.posts], "title","min")
        this.setState({ smallTitlePost: smallestPost });
    }
    // Show the post where the title text has  longest length for the user
    showLongestPostByTitle = () => {
        let longestPost = minmax([...this.state.posts], "title","max")
        this.setState({ longTitlePost: longestPost });
    }
    // Show the todo where the title text has smallest length for the user
    showSmallestTodo = () => {
        let smallestTodo = minmax([...this.state.todos], "title", "min")
        this.setState({ smallTitleTodo: smallestTodo });
    }
    // Show the todo where the title text has longest length for the user
    showLongestTodo = () => {
        let longestTodo = minmax([...this.state.todos], "title", "max")
        this.setState({ longTitleTodo: longestTodo});
    }

    navigate = (page) => (e) => {
        if (page === "todos")
            this.setState({
                showTodos: true,
                showUser: false
            })
        else if (page === "posts")
            this.setState({
                showPosts: true,
                showUser: false
            })
    }

    back = () => {
        this.setState({
            showPosts: false,
            showTodos: false,
            showUser: true
        })
    }

    closeSnackMsg=(event,reason)=>{
        if (reason === 'clickaway') {
            return;
          }
          this.setState({openSnack:false})
    }

    render() {
        const { todos, showPosts, showTodos, showUser, smallTitleTodo, longTitleTodo, posts, smallTitlePost, longTitlePost, longBodyPost, smallBodyPost, loading ,openSnack ,msgSnack ,snackType ,user } = this.state;
        return (
            <div>
                {/* <User user={user}/> */}
                {
                    loading && <Loader />
                }
                {showUser && user && (<div>
                    <UserCard user={user}/> 
                    <Button variant="contained" color="primary" onClick={this.props.back} style={{ margin: '5px' }}>Back</Button>
                    <Button variant="contained" color="primary" onClick={this.navigate("posts")} style={{ margin: '5px' }}>POSTS</Button>
                    <Button variant="contained" color="primary" onClick={this.navigate("todos")} style={{ margin: '5px' }}>TODOS</Button></div>)
                }
                {
                    showTodos && <Todos todos={todos} back={this.back} add={this.insertTodo} user_id={this.props.user_id} showSmallestTodo={this.showSmallestTodo} showLongestTodo={this.showLongestTodo} smallTitleTodo={smallTitleTodo} longTitleTodo={longTitleTodo} />
                }
                {
                    showPosts && <Posts posts={posts} back={this.back} add={this.insertPost} user_id={this.props.user_id} showSmallestPostByTitle={this.showSmallestPostByTitle} showLongestPostByTitle={this.showLongestPostByTitle} smallTitlePost={smallTitlePost} longTitlePost={longTitlePost} showSmallestPostByBody={this.showSmallestPostByBody} showLongestPostByBody={this.showLongestPostByBody} smallBodyPost={smallBodyPost} longBodyPost={longBodyPost} />
                }
                <CustomizedSnackbars openSnack={openSnack} msg={msgSnack} variant={snackType} handleClose={this.closeSnackMsg}/>
            </div>
        )
    }
}

export default User;