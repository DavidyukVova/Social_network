import React from 'react';
import style from './Post.module.css';

const Post = (props) => {

    return(
        <div className={style.item}>
            <img src="/images/avatar.png" alt=""/>
            { props.massage }
            <div>
                <span>Like</span> <span>{ props.likesCount }</span>
            </div>
        </div>
    );
};
export default Post;