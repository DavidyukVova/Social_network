import React from 'react';
import style from './Post.module.css';

const Post = (props) => {

    return(
        <div className={style.item}>
            <div className={style.postInfo}>
                <div className={style.nophotoWrap}>
                    <img src="/images/nouser.png" alt=""/>
                </div>
                <span>{props.massage}</span>
            </div>
            <div>
                <span>Like</span> <span>{ props.likesCount }</span>
            </div>
        </div>
    );
};
export default Post;