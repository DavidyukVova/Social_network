import React from 'react';
import {Col} from "react-bootstrap";

const Profile = () => {
    return(
        <Col xs={9}>
            <div>
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
                    <div>
                        <div>post_1</div>
                        <div>post_2</div>
                        <div>post_3</div>
                        <div>post_4</div>
                    </div>
                </div>
            </div>
        </Col>
    );
};
export default Profile;