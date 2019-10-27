import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import {Link} from "react-router-dom";

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className="App">
                <Header/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Navbar/>
                                <Profile/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
