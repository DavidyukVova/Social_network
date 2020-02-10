import React from 'react';
import {Col, Row} from "react-bootstrap";
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    let friendItem = props.state.friends.map((friend) => (
        <Col xs={4} key={friend.id}>
            <div className={style.friend}>
                <img src="/images/nouser.png" alt=""/>
                <span>{friend.name}</span>
            </div>
        </Col>
    ));

    return (
        <Col xs={3}>
            <nav className={style.sidebar}>
                <div className={style.item}>
                    <NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/dialogs'} activeClassName={style.active}>Massage</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/news'} activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/music'} activeClassName={style.active}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={'/settings'} activeClassName={style.active}>Settings</NavLink>
                </div>

                <div className={style.friendBlock}>
                    <h3>Friends</h3>
                    <Row>
                        {friendItem}
                    </Row>
                </div>

            </nav>

        </Col>
    );
};
export default Navbar;