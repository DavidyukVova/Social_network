import React from 'react';
import {Col} from "react-bootstrap";
import style from './News.module.css';

const News = (props) => {
    return (
        <Col xl={9}>
            <div className={style.news}>
                News
            </div>
        </Col>
    );
};
export default News;