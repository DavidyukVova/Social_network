import React from 'react';
import {Col} from "react-bootstrap";
import style from './Navbar.module.css'

const Navbar = () => {
    return(
        <Col xs={3}>
            <nav className={style.sidebar}>
                <div className={`${style.item} ${style.active}`}><a>Profile</a></div>
                <div className={style.item}><a>Massage</a></div>
                <div className={style.item}><a>News</a></div>
                <div className={style.item}><a>Music</a></div>
            </nav>
        </Col>
    );
};
export default Navbar;