import React from 'react';
import {Col} from "react-bootstrap";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

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
                <MyPosts/>
            </div>
        </Col>
    );
};
export default Profile;