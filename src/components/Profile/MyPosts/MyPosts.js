import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea cols="30" rows="3" placeholder="Your post..."></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post massage='Hi, how are you?' likesCount="0"/>
                <Post massage='It`s my first post' likesCount="23"/>
            </div>
        </div>
    );
};
export default MyPosts;