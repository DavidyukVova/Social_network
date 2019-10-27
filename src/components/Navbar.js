import React from 'react';
import {Col} from "react-bootstrap";

const Navbar = () => {
    return(
        <Col xs={3}>
            <nav className="sidebar">
                <div><a>Profile</a></div>
                <div><a>Massage</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
            </nav>
        </Col>
    );
};
export default Navbar;