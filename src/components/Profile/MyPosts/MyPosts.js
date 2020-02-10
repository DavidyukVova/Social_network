import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postElement = props.posts.map( post => <Post massage={post.massage} id={post.id} likesCount={post.likesCount} key={post.id}/> );

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    };

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return(
        <div>
            <h3 className={style.title}>My posts</h3>
            <div className={style.addNew}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        cols="30"
                        rows="3"
                        placeholder="Your post..."
                        value={props.newPostText}
                    />
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={style.posts}>
                { postElement }
            </div>
        </div>
    );
};
export default MyPosts;