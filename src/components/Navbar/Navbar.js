import React from 'react';
import {Col} from "react-bootstrap";
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <Col xs={3}>
            <nav className={style.sidebar}>
                <div className={`${style.item} ${style.active}`}><Link to={'/'}>Profile</Link></div>
                <div className={style.item}><Link to={'/'}>Massage</Link></div>
                <div className={style.item}><Link to={'/'}>News</Link></div>
                <div className={style.item}><Link to={'/'}>Music</Link></div>
            </nav>
        </Col>
    );
};
export default Navbar;