import React from 'react';
import {Col} from "react-bootstrap";
import style from './Profile.module.css'

const Profile = () => {
    return(
        <Col xs={9}>
            <div className={style.profile}>
                <div>
                    <img src="/images/banner.jpg" alt=""/>
                </div>
                <div>
                    ava + descr
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div className={style.posts}>
                        <div className={style.item}>post_1</div>
                        <div className={style.item}>post_2</div>
                        <div className={style.item}>post_3</div>
                        <div className={style.item}>post_4</div>
                    </div>
                </div>
            </div>
        </Col>
    );
};
export default Profile;