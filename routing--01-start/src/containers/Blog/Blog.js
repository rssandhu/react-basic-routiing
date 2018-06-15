import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';

import NewPost from '../Blog/NewPost/NewPost';

import './Blog.css';
import Posts from './Posts/Posts';

import { Route , Link , Switch} from  'react-router-dom';
import FullPost from '../Blog/FullPost/FullPost';

class Blog extends Component {

    render () {
       

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to = "/new-post" >New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact  render={() => <Posts />} />
                <Route path="/new-post" exact  render={() => <h1>NewPost</h1>} /> */}

               <Switch>
               <Route path="/" exact  component={Posts} />
                <Route path="/new-post"   component={NewPost} />

                {/* dynamic routing  */}
                <Route path = "/posts/:id"  component = {FullPost} />

               </Switch>

                {/* search with route example */}
                {/* <Link to="/my-path?start=5">Go to Start</Link> */}


                {/* <Posts /> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;