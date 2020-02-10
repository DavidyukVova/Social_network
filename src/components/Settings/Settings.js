import React from 'react';
import {Col} from "react-bootstrap";
import style from './Settings.module.css';

const Settings = (props) => {
    return (
        <Col xl={9}>
            <div className={style.settings}>
                Settings
            </div>
        </Col>
    );
};
export default Settings;