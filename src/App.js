import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import {Link} from "react-router-dom";

import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";


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
                            <Row noGutters={true}>
                                <Navbar/>
                                {/*<Profile/>*/}
                                <Dialogs/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
