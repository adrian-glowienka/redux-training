import React from 'react';
import axios from 'axios'

export default class Post extends React.Component {
    state = {
        id: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' +id)
            .then(res =>{
                this.setState({
                    post: res.data
                })
            })
        this.setState({
            id
        })
    }
    render(){

        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ):(
            <div className="center">Loeading post ...</div>
        )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}