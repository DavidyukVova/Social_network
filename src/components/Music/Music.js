import React from 'react';
import {Col} from "react-bootstrap";
import style from './Music.module.css';

const Music = (props) => {
    return (
        <Col xl={9}>
            <div className={style.music}>
                Music
            </div>
        </Col>
    );
};
export default Music;