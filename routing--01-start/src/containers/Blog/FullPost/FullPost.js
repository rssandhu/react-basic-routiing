import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';
import { Redirect } from 'react-router-dom';

class FullPost extends Component {
    state = {
        loadedPost: null,
        redirect : false 
    }

    componentDidMount () { 
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( '/posts/' + this.props.match.params.id)
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                // console.log(response.status == 200 );
                if(response.status === 200 )
                {
                    this.setState({ redirect: true });
                    // <Redirect to = "http://localhost:3000/"  />

                }else{
                    console.log('Error , Unable to delete');
                }
            });
    }

    render () {
        if(this.state.redirect)
        {
                //redirecting after opreation

            return <Redirect to = "/"  />
        }

        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;